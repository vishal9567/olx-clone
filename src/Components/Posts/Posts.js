import React, { useState, useEffect, useContext } from 'react';
import {useNavigate} from 'react-router-dom'

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContex } from '../../store/FirebaseContex';
import { PostContext } from '../../store/PostContex';

function Posts() {
  const { firebase } = useContext(FirebaseContex)
  const [products, setProducts] = useState([])
  const {setPostDetails}=useContext(PostContext)

  const navigate=useNavigate()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((result) => {
      const allpost = result.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allpost)
    })
  })

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        
        <div className="cards">
        {products.map((item) => {
          return (

          <div
            className="card" onClick={()=>{
              setPostDetails(item)
              navigate('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={item.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {item.price}</p>
              <span className="kilometer">{item.category}</span>
              <p className="name">{item.name}</p>
            </div>
            <div className="date">
              <span> {item.createdAt} </span>
            </div>
          </div>
          )
        })
      }
      </div>

      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>

            <div className="cards">
              <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src="../../../Images/R15V3.jpg" alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; 250000</p>
                  <span className="kilometer">Two Wheeler</span>
                  <p className="name"> YAMAHA R15V3</p>
                </div>
                <div className="date">
                  <span>10/5/2021</span>
                </div>
              </div>
            </div>



      </div>
    </div>
  );
}

export default Posts;
