// import React from 'react';
// import BookItems from './BookItems.css';

// function AddressBook(props) {
//     const items = props.items;
//     const listItems = items.map(item => {
//         return <div className="list" key={item.key}>
//             <p>
//                 <input type="text" id={item.key} value={item.text} onChange={(e) => {
//                     props.setUpdate(e.target.value, item.key)
//                 }} />
//                 <span>

//                     <button className="faicons" onClick={() => {
//                         props.deleteItem(item.key)
//                     }} />
//                 </span>
//             </p>

//         </div>
//     })
//     return <div>

//         {listItems}


//     </div>;
// }

// export default AddressBook;