import React, { useEffect } from 'react'
import Image from 'next/image'
import line3 from '@/public/images/video_line/line3.png'
import btnArrow from '@/public/images/video_line/btn-arrow.png'
import Link from 'next/link'

const VideoDetailCard = ({ Title, ReleaseDate, Description, classname, muscleName }) => {
  return (
    <>
      <div className="title-detail">
        <p className="p-1">{Title}</p>
        <p className="p-2">釋出日 |{ReleaseDate}</p>
      </div>
      <div className="type-list">
        <ul className="list-unstyled">
          <li>{classname}</li>
          <li>{muscleName}</li>
        </ul>
      </div>
      <Image
        className="line3"
        src={line3}
        alt="line3"
        width={600}
        height={0}
        style={{
          position: 'relative',
          top: '8px',
          left: '2px',
        }}
      />
      <div className="vid-desc">
        <p>
          {Description}
        </p>
      </div>

      <div className="btn3" style={{ position: 'relative' }}>
        <Link href="/video/videoList" style={{ 'text-decoration': 'none' }}>
          <Image
            className="btn-arrow"
            src={btnArrow}
            alt="btnArrow"
            width={53}
            height={132}
            style={{
              position: 'absolute',
              top: '-65px',
              left: '155px',
            }}
          />
          <div className="view-btn">
            <p>想看更多</p>
          </div>
        </Link>
      </div>

      <style jsx>
        {`
          ul li {
            font-size: 18px;
            font-family: 'Noto Sans TC', sans-serif;
            color:#2d3748;
            background-color:#e2e8f0;
            border: 2px solid #e2e8f0;
            border-radius: 50px;
            padding: 7px;
          }

          .list-unstyled {
            display: flex;
            margin: 0px;
            padding: 0px;
            list-style: none;
          }

          .title-detail p {
            font-family: 'Noto Sans TC', sans-serif;
            margin-bottom: -5px;
          }

          .type-list {
            margin-top: 45px;
          }

          .type-list li {
            font-size:20px;
            margin-right: 25px;
          }

          .p-1 {
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 30px;
            color: #e25d31;
            letter-spacing: 2px;
          }

          .p-2 {
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 18px;
            color: #676161;
            letter-spacing: 1.5px;
          }

          .view-btn {
            margin-top: 200px;
            width: 230px;
            height: 75px;
            background-color: #f36f36;
            border: transparent;
            border-radius: 26px;
          }
          .view-btn:hover {
            width: 230px;
            height: 75px;
            background-color: #f36f36;
            border: transparent;
            border-radius: 26px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          }
          .view-btn p {
            position: relative;
            top: 20px;
            left: 46px;
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 23px;
            letter-spacing: 2.5px;
            color: #ffffff;
          }

          .vid-desc p {
            margin-top:25px;
            font-family: 'Noto Sans TC', sans-serif;
            color: #4f4c4c;
            font-size: 20px;
            letter-spacing: 2px;
          }
        `}
      </style>
    </>
  )
}

export default VideoDetailCard
