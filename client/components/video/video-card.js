import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaMinus, FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addfavoriteVideo, removeFavoriteVideo } from '@/pages/store/favoriteVideoSlice';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Card = ({ VideoID, Title, Description, vidthumbnail, muscleName, auth }) => {
  const [detailvedio, setDetailvedio] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); // Track if the video is in favorites
  const router = useRouter();
  const { vid } = router.query
  const dispatch = useDispatch();
  const favoriteVideos = useSelector(state => state.favoriteVideo.favoriteVideos);
  const handleButtonClick = () => {
    router.push(`/video/${VideoID}`);
  };

  const notify = () => toast.info('影片已移出收藏！', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const notify1 = () => toast.success('影片已加入收藏！', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  //抓取memberID
  const member_id = useSelector((state) => state.user.user.member_id)

  useEffect(() => {
    async function getvedioDetail() {
      if (vid) {
        const urlapi = `http://localhost:3005/api/getvedioDetail?videoID=${vid}`;
        const response = await fetch(urlapi);
        const res = await response.json();
        const vedioItem = res.videoDetail[0];
        setDetailvedio(vedioItem);
      }
    }
    getvedioDetail();
  }, [vid, router.isReady]);

  useEffect(() => {
    setIsFavorite(favoriteVideos.some(video => video.VideoID === VideoID));
  }, [favoriteVideos, VideoID]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      dispatch(removeFavoriteVideo(VideoID));
      // 調用 API 以從資料庫中移除
      try {
        const response = await axios.delete(`http://localhost:3005/api/removeFavoriteVideo/?member_id=${member_id}&VideoID=${VideoID}`);
        console.log(response.data.success);
        notify();
      } catch (error) {
        console.error('Error removing from favorites:', error);
      }
    } else {
      const videoData = {
        VideoID,
        Title,
        muscleName,
        vidthumbnail,
        memberid: member_id,
      };
      dispatch(addfavoriteVideo(videoData));
      // 調用 API 以添加到資料庫
      try {
        const response = await axios.post('http://localhost:3005/api/PostFavoriteVideo', videoData);
        console.log(response.data.success);
        notify1();
      } catch (error) {
        console.error('Error adding to favorites:', error);
      }
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <ToastContainer />
      <div className="card" style={{ width: '360px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Link href="#" onClick={handleButtonClick}>
          <Image
            onClick={handleButtonClick}
            className="card-img-top"
            src={`http://localhost:3000/images/video_image/${vidthumbnail}`}
            alt="vidthumbnail"
            width={330}
            height={200}
            style={{ borderRadius: '10px 10px 0 0' }}
          />
        </Link>
        <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Link href="#" onClick={handleButtonClick} style={{ textDecoration: 'none' }}>
              <h2 className="card-title">{Title}</h2>
            </Link>
            <p className="card-text">{Description}</p>
          </div>
          {!auth ? (
            <button className="try-now btn" onClick={handleButtonClick}>
              <FaPlay style={{ color: '#e25d31', size: '2xl', icon: 'light' }} /> 立即試閱
            </button>
          ) : (
            <button className="add-to-favorites btn" onClick={toggleFavorite}>
              {isFavorite ? (
                <>
                  <FaMinus style={{ color: '#e25d31', size: '2xl', icon: 'light' }} /> 取消收藏
                </>
              ) : (
                <>
                  <FaPlus style={{ color: '#e25d31', size: '2xl', icon: 'light' }} /> 加入收藏
                </>
              )}
            </button>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .card-title {
            position: relative;
            top: 10px;
            font-family: 'Noto Sans TC', sans-serif;
            letter-spacing: 1px;
            font-weight: normal;
            font-size: 18px;
            color: #515151;
          }
          .card-title:hover {
<<<<<<< HEAD
            font-family: 'Noto Sans TC', sans-serif;
=======
            font-family: 'Rambla', sans-serif;
            letter-spacing: 1px;
          }

          .card-text {
<<<<<<< HEAD
            font-family: 'Noto Sans TC', sans-serif;
=======
            font-family: 'Rambla', sans-serif;
>>>>>>> origin/Tung
            letter-spacing: 1.5px;
            font-weight: normal;
            margin-top: 30px;
            color: #777777;
            font-size: 15px;
          }

          .btn {
<<<<<<< HEAD
            font-family: 'Noto Sans TC', sans-serif;
=======
>>>>>>> origin/Tung
            margin-top: 20px;
            font-size: 20px;
          }
            
          @media screen and (max-width: 768px) {
            .card {
              width: 100%;
              height:262px;
            }
            .card-img-top{
              width: 100%;
              height:211.58px;
            }
            .card-title {
              font-size: 13px;
<<<<<<< HEAD
              font-family: 'Noto Sans TC', sans-serif;
=======
              font-family: 'Rambla', sans-serif;
>>>>>>> origin/Tung
              letter-spacing: 1px;
              font-weight: normal;
              color: #515151;
            } 
            .card-title:hover {
<<<<<<< HEAD
            font-family: 'Noto Sans TC', sans-serif;
=======
            font-family: 'Rambla', sans-serif;
>>>>>>> origin/Tung
            letter-spacing: 1px;
            font-weight: normal;
            font-size: 13px;
            color: #ea6f2a;
          }

          .card-text 
          {
            display:none;
          }

          .btn 
          {
            display:none;
          }
          }
        `}
      </style>
    </>
  );
};

export default Card;