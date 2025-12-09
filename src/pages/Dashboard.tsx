import React, { useContext, useState, useMemo } from 'react';
import { FiltersBar } from '../assets/components/FiltersBar';
import { WishList } from '../assets/components/WishList';
import { ConfirmModal } from '../assets/components/ConfirmModal';
import { WishContext } from '../context/WishContext';
import { Wish } from '../types/wish';
import { WishModalForm } from '../assets/components/WishModalForm';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { wishes, deleteWish, updateWish, addWish } = useContext(WishContext);

  const [sortByDate, setSortByDate] = useState<'newest' | 'oldest'>('newest');
  const [sortByPrice, setSortByPrice] = useState<'priceHigh' | 'priceLow'>('priceHigh');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();


const sortedWishes = useMemo(() => {
  const sorted = [...wishes];

  if (sortByDate) {
    return sorted.sort((a, b) =>
      sortByDate === 'newest'
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }

  if (sortByPrice) {
    return sorted.sort((a, b) =>
      sortByPrice === 'priceHigh'
        ? b.price - a.price
        : a.price - b.price
    );
  }

  return sorted;
}, [wishes, sortByDate, sortByPrice]);



  const paginatedWishes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedWishes.slice(startIndex, endIndex);
  }, [sortedWishes, currentPage]);

  const totalPages = Math.ceil(sortedWishes.length / itemsPerPage);

  const [showForm, setShowForm] = useState(false);
  const [editingWish, setEditingWish] = useState<Wish | null>(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [wishToDelete, setWishToDelete] = useState<string | null>(null);

const handleSortChange = (type: 'date' | 'price', value: string) => {
  if (type === 'date') {
    setSortByDate(value as 'newest' | 'oldest');
    setSortByPrice(null as any);
  }

  if (type === 'price') {
    setSortByPrice(value as 'priceHigh' | 'priceLow');
    setSortByDate(null as any);
  }

  setCurrentPage(1);
};



  const handleAddWish = () => {
    setEditingWish(null);
    setShowForm(true);
  };

  const handleUpdateWish = (wish: Wish) => {
    setEditingWish(wish);
    setShowForm(true);
  };

  const handleDeleteWish = (id: string) => {
    setWishToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (wishToDelete) deleteWish(wishToDelete);
    setShowConfirm(false);
    setWishToDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <FiltersBar
        sortByDate={sortByDate}
        sortByPrice={sortByPrice}
        onSortChange={handleSortChange}
        onAddWish={handleAddWish}
      />

      <WishList
        wishes={paginatedWishes}
        onDelete={handleDeleteWish}
        onUpdate={handleUpdateWish}
        onDetails={(id) => {
          navigate(`/wish/${id}`);

        }}
      />

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded text-sm transition ${
                currentPage === i + 1
                  ? 'bg-accentViolet text-white'
                  : 'bg-surface text-textSecondary hover:bg-midnight'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {showForm && (
        <WishModalForm
          initialData={editingWish}
          onClose={() => setShowForm(false)}
          onSubmit={(wish) => {
            editingWish ? updateWish(wish) : addWish(wish);
            setShowForm(false);
          }}
        />
      )}

      {showConfirm && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;