using Shipfinity.DataAccess.Repositories.Implementations;
using Shipfinity.Domain.Models;
using Shipfinity.DTOs.SellerDTOs;
using Shipfinity.Mappers;
using Shipfinity.Services.Interfaces;

namespace Shipfinity.Services.Implementations
{
    public class SellerService : ISellerService
    {
        private readonly SellerRepository _sellerRepository;

        public SellerService(SellerRepository _sellerRepository)
        {
            this._sellerRepository = _sellerRepository;
        }
        public async Task CreateSellerAsync(CreateSellerDTO createSellerDTO)
        {
            Seller sellerEntity = createSellerDTO.ToSeller();
            await _sellerRepository.InsertAsync(sellerEntity);
        }

        public async Task DeleteByIdAsync(int id)
        {
            await _sellerRepository.DeleteByIdAsync(id);
        }

        public async Task EditSellerAsync(EditSellerDTO editSellerDTO)
        {
            Seller sellerDb = await _sellerRepository.GetByIdAsync(editSellerDTO.Id);

            sellerDb.Name = editSellerDTO.Name;
            sellerDb.Email = editSellerDTO.Email;
            sellerDb.Address = editSellerDTO.Address;
            sellerDb.PhoneNumber = editSellerDTO.PhoneNumber;

            await _sellerRepository.UpdateAsync(sellerDb);
        }

        public async Task<SellerDTO> GetSellerByIdAsync(int id)
        {
            
            Seller sellerDb = await _sellerRepository.GetByIdAsync(id);

            return sellerDb.ToSellerDTO();
        }

        public async Task<List<SellerDTO>> GetSellersAsync()
        {
            List<Seller> sellerDb = await _sellerRepository.GetAllAsync();

            return sellerDb.Select(x => x.ToSellerDTO()).ToList();
        }

    }
}
