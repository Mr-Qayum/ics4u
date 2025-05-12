import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../context';
import { Map } from "immutable";
import { firestore } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

function KeyTest() {
    const { user, cart, setCart } = useStoreContext();
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');

    useEffect(() => {
        const storedCart = localStorage.getItem(`${user.uid}-cart`);
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCart(Map(parsedCart));
        }
    }, []);

    const handleAdd = () => {
        const updatedCart = cart.set(field1, field2);
        setCart(updatedCart);

        const vanillaCart = updatedCart.toJS();
        const parseCart = JSON.stringify(vanillaCart);
        localStorage.setItem(`${user.uid}-cart`, parseCart);
    };

    const handlePurchase = async () => {
        const data = cart.toJS();
        const docRef = doc(firestore, "users", user.uid);
        await setDoc(docRef, data);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter first value"
                value={field1}
                onChange={(e) => setField1(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter second value"
                value={field2}
                onChange={(e) => setField2(e.target.value)}
            />
            <button onClick={handleAdd}>Submit</button>

            <ul>
                {cart.entrySeq().map(([key, value]) => (
                    <li key={key}>
                        {key}: {value.toString()}
                    </li>
                )).toArray()}
            </ul>

            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
}

export default KeyTest;
