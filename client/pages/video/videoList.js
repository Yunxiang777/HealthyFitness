import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import VideoCard from '@/components/video/video-card'
import VidMenu from '@/components/video/vid-menu'
import VideoGallery from '@/components/video/video-gallery'
import useAuthGuard from '../authGuard' //使用路由守衛
import MyFooter from '@/components/layout/default-layout/my-footer'
import VidMenuNav from '@/components/video/vid-menu-nav'


export default function VideoList() {
  const auth = useAuthGuard() //路由守衛直接掛在第一行
  const [dataVedio, setdataVedio] = useState([])
  const [selectedMuscle, setSelectedMuscle] = useState(null)
  const [currentPage, setCurrentPage] = useState(1) // 當前頁碼
  const videosPerPage = 9 // 每頁顯示的影片數量

  useEffect(() => {
    async function getVedio() {
      const url = 'http://localhost:3005/api/getVedio'
      const response = await fetch(url)
      const res = await response.json()
      setdataVedio(res.video)
    }
    getVedio()
  }, [])

  const filteredVideos = selectedMuscle
    ? dataVedio.filter((video) => video.musclegroupID === selectedMuscle)
    : dataVedio

  // 分頁計算
  const indexOfLastVideo = currentPage * videosPerPage
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  )

  // 改變當前頁碼
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className='bg-img'>
      </div>
      <div className="all">
        <div className="other-elements" style={{ position: 'relative', zIndex: 2000 }}>
          <div className="box6">
            <VideoGallery />
          </div>
          <div className="box1">
            <VidMenu setSelectedMuscle={setSelectedMuscle} />
          </div>
          <div className="list-box">
            <VidMenuNav />
            <div className="row" style={{ marginRight: '120px' }}>
              {currentVideos.map((video) => (
                <div className="map col-4 mb-5" key={video.VideoID}>
                  <VideoCard
                    VideoID={video.VideoID}
                    Title={video.Title}
                    Description={video.Description}
                    vidthumbnail={video.vidthumbnail}
                    muscleName={video.muscleName}
                    auth={auth}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ position: 'relative', zIndex: 2000 }}>
        <MyFooter />
      </div>

      {/* 分頁 */}
      <div className="pagination-container" style={{ position: 'relative', zIndex: 2000 }}>
        <button
          className="button prevNext"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div className="links">
          {Array.from(
            { length: Math.ceil(filteredVideos.length / videosPerPage) },
            (_, index) => (
              <a
                href="#"
                className={`link ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => paginate(index + 1)}
                key={index + 1}
              >
                {index + 1}
              </a>
            )
          )}
        </div>
        <button
          className="button prevNext"
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredVideos.length / videosPerPage)
          }
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>

      <style jsx>{`
        .all {
          {/* padding:0 20px 0 20px; */}
          height: 2450px;
          display: flex;
          flex-direction: column;
        }
        .footer {
          margin-top: auto;
        }
        .box1 {
          padding-left:180px;
          width: 21%;
        }
        .box6 {
          margin-top: 90px;
          padding-left: 20px;
          width: 100%;
        }

        .row {
          margin-top:60px;
          padding-left: 475px;
        }

        .pagination-container {
            display: flex;
            align-items: center;
            padding-left: 900px;
            margin-top: -500px;
        }

        .button {
          height: 45px;
          width: 45px;
          font-size: 20px;
          color: #666666;
          background-color: #f2f2f2;
          border-radius: 6px;
          cursor: pointer;
          margin-right: 15px; /* 調整箭頭和頁碼的水平間距 */
        }

        .links {
          column-gap: 12px;
        }

        .link {
          font-weight: 500;
          text-decoration: none;
          text-align: center;
          margin: 10px;
          padding: 15px;
          height: 45px;
          width: 45px;
          font-size: 20px;
          color: #666666;
          background-color: #fff;
          border-radius: 6px;
          cursor: pointer;
        }

        .link.active {
          color: #fff;
          background: #111111;
        }

        .prevNext {
          padding: 0;
          margin: 0;
        }

        .list-box {
          margin-top: -830px;
        }

        @media screen and (max-width: 768px) {
          .container {
            background-color: #f4f1f1;
            margin: 0;
            padding: 0;
          }

          .row {
            display: flex;
            flex-direction: column;
          }

          .map {
            margin-left: -270px;
          }
        }
      `}</style>
    </>
  )
}