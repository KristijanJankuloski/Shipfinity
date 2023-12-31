﻿using System.ComponentModel.DataAnnotations;

namespace Shipfinity.Domain.Models
{
    public class Product : BaseEntity
    {
        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;
        [MaxLength(255)]
        public string Description { get; set; } = string.Empty;
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public Seller Seller { get; set; }
        public int SellerId { get; set; }
        [Range(0, 999999)]
        public double Price { get; set; }
        [Range(0, 100)]
        public int DiscountPercentage { get; set; }
        [Range(0, 5)]
        public short Rating { get; set; }
        [MaxLength(150)]
        public string? ImageUrl { get; set; }
        public List<ProductOrder> ProductOrders { get; set; } = new();
        public List<ReviewProduct> ProductReviews { get; set; } = new();
    }
}
