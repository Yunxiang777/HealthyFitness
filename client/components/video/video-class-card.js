import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';

const VideoClassCard = ({ Title, classname, vidthumbnail }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div>
          <Image
            className="card-img-top"
            src={`http://localhost:3000/images/video_image/${vidthumbnail}`}
            alt="vidthumbnail"
            width={330}
            height={200}
            style={{
              borderRadius: '10px 10px 0 0', maxWidth: '100%' }}
          />
        </div>
        <div className="card-body">
          <div>
            <div style={{ textDecoration: 'none' }}>
              <h2 className="card-title">{Title}</h2>
            </div>
            <p className="card-text">{classname}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card-container {
            width: 100%;
            margin-bottom: 30px;
            display: flex; 
            flex-direction: column;
            }

          .card {
            display: flex;
            flex-direction: column;
            height: 100%;
            width:85%;
            border-radius: 10px;
            overflow: hidden;
          }

          .card-text{
            font-family: 'Noto Sans TC', sans-serif;
            letter-spacing: 1px;
            text-align:center;
            font-weight: normal;
            font-size: 14px;
            letter-spacing: 1.5px;
            color: #747474;
            margin-top: 15px;
            margin-bottom: -20px;
          }

          .card-title {
            font-family: 'Noto Sans TC', sans-serif;
            text-align:center;
            font-weight: bold;
            letter-spacing: 1px;
            font-weight: normal;
            font-size: 16px;
            color: #4F4C4C;
            margin-bottom: 5px; 
          }

          {/* .card-title:hover {
            font-family: 'Rambla', sans-serif;
            letter-spacing: 1px;
            font-weight: normal;
            font-size: 18px;
            color: #4F4C4C;
            margin-bottom: 10px; 
          } */}

          .card-body {
            flex: 1;
            display: flex;
            width: 100%; /* 設置寬度為 100% */
            flex-direction: column;
            justify-content: space-between;
            margin: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default VideoClassCard;
