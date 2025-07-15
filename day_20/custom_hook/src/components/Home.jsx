import { Link } from 'react-router';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from './Home.module.css';

const Home = () => {
    const [notes, setNotes] = useLocalStorage('notes', []);

    const handleDelete = (indexToDelete) => {
        const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
        setNotes(updatedNotes);
    };

    return (
        <div className={styles.container}>
            <h1>My Notes</h1>
            <Link to="new">
                <button className={styles.button}>Create New Note</button>
            </Link>
            <ul className={styles.noteList}>
                {notes.length === 0 ? (
                    <li>No notes available. Create one!</li>
                ) : (
                    notes.map((note, index) => (
                        <li key={index} className={styles.noteItem}>
                            <h3 className={styles.noteTitle}>{note.title}</h3>
                            <p className={styles.noteDescription}>{note.description}</p>
                            <button
                                className={styles.deleteBtn}
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Home;
