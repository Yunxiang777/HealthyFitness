import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image from 'next/image'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { v4 as uuidv4 } from 'uuid'

export default function NewArrival() {
  const [detailproduct, setDetailProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      const urlapi = `http://localhost:3005/api/getLastTenProducts`
      try {
        const response = await axios.get(urlapi)
        const productItems = response.data.productAll
        setDetailProduct(productItems)
      } catch (error) {
        console.error('獲取最後十個產品時出錯：', error)
      }
    }
    fetchData()
  }, [])

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // 創建一个視窗寬度變化時的事件監聽器
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // 初始化時獲得視窗寬度
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    // 清除事件監聽器以防止内存泄漏
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const router = useRouter()

  const sliderRef = useRef(null)

  useEffect(() => {
    sliderRef.current.slickGoTo(0) // 将 Slider 返回到第一个产品
  }, [windowWidth])

  const goToProduct = (pid) => {
    router.push(`/product/${pid}`)
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  if (windowWidth < 768) {
    settings.slidesToShow = 2
  } else if (windowWidth < 1002) {
    settings.slidesToShow = 3
  } else if (windowWidth < 1455) {
    settings.slidesToShow = 4
  } else {
    settings.slidesToShow = 5
  }
  return (
    <>
      <h2>NEW ARRIVAL</h2>
      <Slider {...settings} ref={sliderRef} className="mb-3 slider">
        {detailproduct.map((product) => (
          <div className="card-1" key={uuidv4()}>
            <div
              key={product.p_id}
              className="card"
              onClick={() => goToProduct(product.p_id)}
            >
              <Image
                className="card-img-top"
                src={`/images/product_img/${product.p_image}`}
                alt={product.p_name}
                width={160}
                height={160}
                layout="responsive"
              />
              <div className="card-body">
                <h6 className="card-title text-center">{product.p_name}</h6>
                <p className="card-text text-center">NT${product.p_price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>
        {`
          .card {
            border-radius: 10px;
            border: 2px solid #e1e1e1;
            transition: transform 0.3s ease; /* 添加 transition 属性*/
            cursor: pointer;
          }
          .card-img-top {
            border-radius: 10px 10px 0 0;
            border: 1px solid #b8b8b8;
          }
          h2 {
            font-family: 'Noto Sans TC', sans-serif;
            text-align: center;
            font-size: 30px;
            color: #414141;
            letter-spacing: 4px;
            margin-bottom: 20px;
          }
          h6 {
            font-weight: bold;
          }
          p {
            font-size: 13px;
          }

          .card-1 {
            padding: 15px;
          }
          .card:hover {
            transform: scale(1.07);
            box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </>
  )
}
