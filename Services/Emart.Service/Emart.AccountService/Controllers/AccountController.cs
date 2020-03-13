using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Emart.AccountService.Models;
using Emart.AccountService.Repository;
using EMart.AccountService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public readonly IAccountRepository _repo;
        private readonly IConfiguration configuration;
        public AccountController(IAccountRepository repo, IConfiguration configuration)
        {
            _repo = repo;
            this.configuration = configuration;

        }
        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult BuyerRegister(Buyer buyer)
        {
            try
            {
                _repo.BuyerRegister(buyer);
                return Ok();
            }
            catch (Exception b)
            {
                return NotFound(b.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult SellerRegister(Seller seller)
        {
            try
            {
                _repo.SellerRegister(seller);
                return Ok();
            }
            catch (Exception s)
            {
                return NotFound(s.Message);
            }
        }

        [HttpGet]
        [Route("Sellerlogin/{username}/{password}")]
        public IActionResult sellerLogin(string username, string password)
        {
            Token token = null;
            try
            {
                Seller seller = _repo.SellerLogin(username, password);
                if (seller != null)
                {
                    token = new Token() { Sid = seller.Sid, token = GenerateJwtToken(username), message = "success" };
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception s)
            {
                return NotFound(s.Message);
            }
        }
        [HttpGet]
        [Route("Buyerlogin/{username}/{password}")]
        public IActionResult BuyerLogin(string username, string password)
        {
            Token token = null;
            try
            {
                Buyer buyer = _repo.BuyerLogin(username, password);
                if (buyer != null)
                {
                    token = new Token() {Bid =buyer.Bid, token = GenerateJwtToken(username), message = "success" };
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception b)
            {
                return NotFound(b.Message);
            }
        }
        private string GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
            configuration["JwtIssuer"],
            configuration["JwtIssuer"],
            claims,
            expires: expires,
            signingCredentials: credentials
        );

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }

}


