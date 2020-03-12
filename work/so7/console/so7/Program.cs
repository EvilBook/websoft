using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.IO;

namespace so7
{
    class Program
    {
        static void Main(string[] args)
        {
            string choice="";
            var items=new List<Account>();
            
            using (StreamReader r = new StreamReader("../../data/account.json"))
    {
        var json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<Account>>(json);
                foreach (var item in items)
                {
                    Console.WriteLine("{0} {1} {2} {3}", item.Number, item.Balance, item.Label, item.Owner);
                }
                }
            
            while(true){
                Console.WriteLine("****");
                Console.WriteLine("");
                Console.WriteLine("1. View accounts;");
                Console.WriteLine("2. View account by number;");
                Console.WriteLine("3. Option three");
                Console.WriteLine("4. Option four");
                Console.WriteLine("5. Option five");
                Console.WriteLine("6. Exit");
                Console.WriteLine("");
                Console.WriteLine("****");
                                Console.WriteLine("");



                choice=Console.ReadLine();
                if(choice=="1"){
                    Console.WriteLine("*-----------------------------------*");
                    Console.WriteLine("| Number | Balance |  Label  | Owner |");
                    Console.WriteLine("*-----------------------------------*");
                    foreach (var item in items)
                {
                    Console.WriteLine(">{0}       {1}    {2}      {3}<", item.Number, item.Balance, item.Label, item.Owner);
                }
                Console.WriteLine("*-----------------------------------*");
                        
                }else if(choice=="2"){
                    while(true){
                        Console.WriteLine("Please select an id: ");
                        choice=Console.ReadLine();
                        foreach (var item in items){
                            if(item.Number==choice){
                    Console.WriteLine(" ");

                    Console.WriteLine("*-----------------------------------*");
                    Console.WriteLine("| Number | Balance |  Label  | Owner |");
                    Console.WriteLine("*-----------------------------------*");
                    Console.WriteLine(">{0}       {1}       {2}       {3}<", item.Number, item.Balance, item.Label, item.Owner);
                    Console.WriteLine("*-----------------------------------*");
                                                    Console.WriteLine(" ");


                                break;
                            }
                    
                }
                        break;
                        

                        
                    }
                    
                }else if(choice=="6"){
                    break;
                }
            }
        }
        
        
    }
    
    
    public class Account
{
    public string Number,Balance,Label,Owner;

    public Account(string a, string b, string c, string d)
    {
     Number=a;
        Balance=b;
        Label=c;
        Owner=d;
    }
}
    
}
