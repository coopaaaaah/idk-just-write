'use client'

import { useState } from "react";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type FormEvent = React.ChangeEvent<HTMLFormElement>;

interface NoteItemProps {
    items: Array<string>;
}

function NoteItem({items}: NoteItemProps) {
    return (
        <ul className="list-none">
            {items.map((i, index) => <li className="hover:list-disc" key={index}>{i}</li>)}
        </ul>
    )
}

export default function Note() {

    const [items, setItems] = useState([
        'Go to the grocery store.',
        'Practice programming',
        'Watch Blender tutorial about lights'
    ]);

    const [item, setItem] = useState('');

    const handleChange = (event: InputEvent) => {
        setItem(event.target.value);
    }

    const addItem = (event: FormEvent) => {

        event.preventDefault();

        if (!item) {
            return;
        }

        setItems([...items, item]);
        setItem('');
    }

    return (
        <>
            <form onSubmit={addItem}>
                <label htmlFor="add_item" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add Item</label>
                <div className="relative">
                    <input type="text" id="add_item" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add" value={item} required onChange={handleChange} />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
                </div>
            </form>
            <NoteItem items={items}/>
        </>
    )
}