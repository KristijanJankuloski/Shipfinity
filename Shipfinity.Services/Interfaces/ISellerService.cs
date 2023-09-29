using Shipfinity.Domain.Models;
using Shipfinity.DTOs.SellerDTOs;

namespace Shipfinity.Services.Interfaces
{
    public interface ISellerService
    {
        Task<List<SellerDTO>> GetSellersAsync();
        Task<SellerDTO> GetSellerByIdAsync(int id);
        Task CreateSellerAsync(CreateSellerDTO createSellerDTO);
        Task EditSellerAsync(EditSellerDTO editSellerDTO);
        Task DeleteByIdAsync(int id);
    }
}
