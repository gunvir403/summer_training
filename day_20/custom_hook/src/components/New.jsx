import { useState } from 'react';
import { useNavigate } from 'react-router';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from './New.module.css';

const New = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useLocalStorage('notes', []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, description };
    setNotes([...notes, newNote]);
    navigate('/');
  };

  return (
    <div className={styles.container}>
        <h1>Create a New Note</h1>
        <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <label className={styles.label}>Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={styles.input}
            />
        </div>
        <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.textarea}
            />
        </div>
        <button type="submit" className={styles.button}>Save Note</button>
      </form>
    </div>
  );
};

export default New;
