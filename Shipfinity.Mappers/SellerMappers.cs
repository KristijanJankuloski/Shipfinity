using Shipfinity.Domain.Models;
using Shipfinity.DTOs.SellerDTOs;

namespace Shipfinity.Mappers
{
    public static class SellerMappers
    {
        public static SellerDTO ToSellerDTO(this Seller seller)
        {
            return new SellerDTO()
            {
                Id = seller.Id,
                Address = seller.Address,
                Email = seller.Email,
                Name = seller.Name,
                PhoneNumber = seller.PhoneNumber
            };
        }

        public static Seller ToSeller(this CreateSellerDTO createSellerDTO)
        {
            return new Seller()
            {
                Address = createSellerDTO.Address,
                Email = createSellerDTO.Email,
                Name = createSellerDTO.Name,
                PhoneNumber = createSellerDTO.PhoneNumber
            };
        }
    }
}
