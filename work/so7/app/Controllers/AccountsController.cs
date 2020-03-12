using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using app.Models;
using app.Services;

namespace app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        public AccountsController(InfoService accountService)
        {
            AccountService = accountService;
        }

        public InfoService AccountService { get; }

        [Route("")]
        [HttpGet]
        public IEnumerable<Account> Get()
        {
            return AccountService.GetAccounts();
        }
        
        [Route("{id:int}")]
        [HttpGet]
        public string GetAccount(int id){
        Console.WriteLine("FUCK OFF "+id);
            foreach(Account account in AccountService.GetAccounts()){
            if(account.Number==id){
            return JsonSerializer.Serialize(account);
            }
            }
            return "Shit";

        }
        
    }
}
