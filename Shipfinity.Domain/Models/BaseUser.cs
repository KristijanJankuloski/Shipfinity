using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shipfinity.Domain.Models
{
    public class BaseUser : IdentityUser
    {
        public Seller Seller { get; set; }
        public int SellerId { get; set; }
    }
}
