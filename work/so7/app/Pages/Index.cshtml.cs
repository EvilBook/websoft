using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using app.Models;
using app.Services;

namespace app.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public IEnumerable<Account> Accounts{get; private set;}
        public InfoService AccountService;

        public IndexModel(ILogger<IndexModel> logger, InfoService accountService){
            _logger = logger;
            AccountService=accountService;
        }

        public void OnGet()
        {
        Accounts = AccountService.GetAccounts();

        }
    }
}
