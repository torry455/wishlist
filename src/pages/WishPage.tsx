import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Wish } from '../types/wish';
import { useApi } from '../hooks/useApi';
import { WishModalForm } from '../assets/components/WishModalForm';
import { ConfirmModal } from '../assets/components/ConfirmModal';
import { DeleteButton } from '../assets/buttons/DeleteButton';
import { UpdateButton } from '../assets/buttons/UpdateButton';

const WishPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById, update, remove } = useApi();

  const [wish, setWish] = useState<Wish | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchWish = async () => {
      const data = await getById(id!);
      if (data) setWish(data);
      else navigate('/');
    };
    fetchWish();
  }, [id]);

  const handleUpdate = async (updatedWish: Wish) => {
    const result = await update(updatedWish.id, updatedWish);
    setWish(result);
    setShowForm(false);
  };

  const handleDelete = async () => {
    await remove(id!);
    navigate('/');
  };

  if (!wish)
    return (
      <p className="text-center mt-10 text-textSecondary text-sm sm:text-base">
        Loading...
      </p>
    );

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6 bg-midnight text-white">
      <button
        onClick={() => navigate('/')}
        className="text-accentViolet hover:underline mb-6 text-sm transition"
      >
        ← Go back to dashboard
      </button>

      <div className="w-full max-w-3xl bg-surface border border-borderMuted rounded-xl shadow-xl overflow-hidden backdrop-blur-sm">
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
<img
  src={wish.image}
  alt={wish.title}
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = 'https://i.pinimg.com/736x/4e/0e/04/4e0e047182b54c9f4fd6436971b8efe6.jpg';
  }}
  className="absolute inset-0 w-full h-full object-cover"
  loading="lazy"
/>

        </div>

<div className="p-6 text-sm sm:text-base">
  <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">
    {wish.title}
  </h1>
  <p className="text-textSecondary mb-4">{wish.description}</p>
  <p className="text-lg font-semibold text-accentViolet">${wish.price}</p>
</div>

<div className="flex flex-col sm:flex-row justify-between items-center gap-2 px-6 py-4 border-t border-borderMuted bg-surface text-white text-sm">
  <DeleteButton onClick={() => setShowConfirm(true)} />
  <UpdateButton onClick={() => setShowForm(true)} />


</div>
      </div>

      {showForm && (
        <WishModalForm
          initialData={wish}
          onClose={() => setShowForm(false)}
          onSubmit={handleUpdate}
        />
      )}

      {showConfirm && (
        <ConfirmModal
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
};

export default WishPage;