import React, { useState } from 'react'


export default function VidMenu({ setSelectedMuscle }) {
  const handleMuscleClick = (musclegroupID) => {
    setSelectedMuscle(musclegroupID)
  }
  return (
    <>
      <div className="guide">
        <div className="tilte-menu-1">
          <p className="tilte-1">肌群分類</p>
        </div>
        <div className="typelist">
          <ul className="vid-type-style">
            <div className="btn" onClick={() => handleMuscleClick(1)}>
              <li>胸肌</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(2)}>
              <li>背肌</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(3)}>
              <li>腹肌</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(4)}>
              <li>腿部肌群</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(5)}>
              <li>肩部肌群</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(6)}>
              <li>手臂肌群</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(7)}>
              <li>臀肌</li>
            </div>
            <div className="btn" onClick={() => handleMuscleClick(8)}>
              <li>全身肌群</li>
            </div>
          </ul>
        </div>
        <br />
        {/* <div className="tilte-menu">
          <p>上架時程</p>
          <Image
            className="line"
            src="/images/video_line/Line.png"
            alt="line"
            width={143}
            height={1}
            style={{
              position: 'relative',
              top: '35px',
              left: '10px',
            }}
          />
          <Image
            className="timeline"
            src="/images/video_line/timeline.png"
            alt="timeline"
            width={20}
            height={620}
            style={{
              position: 'relative',
              top: '100px',
              left: '-250px',
            }}
          />
          <div className="text">
            <div className="time">
              <p>10分鐘腿部訓練【初級版】</p>
              <p className="p1">
                訓練的内容一共包含6個 訓練動作x2組+30秒組間休息時間
              </p>
              <p className="p2">
                <i class="fa-solid fa-clock"></i>2023-06-08
              </p>
            </div>
            <div className="time">
              <p>10分鐘背部訓練【高級版】</p>
              <p className="p1">
                共有13個訓練動作 之間也給大家留了60秒的調息時間
              </p>
              <p className="p2">
                <i class="fa-solid fa-clock"></i>2023-06-11
              </p>
            </div>
            <div className="time">
              <p>12分鐘居家啞鈴肩部訓練【中級版】</p>
              <p className="p1">
                這次的啞鈴訓練，會分成兩組進行 整個訓練共包含了一個熱身和 8
                個訓練動作
              </p>
              <p className="p2">
                <i class="fa-solid fa-clock"></i>2023-06-13
              </p>
            </div>
            <div className="time">
              <p>10分鐘上半身徒手訓練【中級版】</p>
              <p className="p1">這次的訓練會有15個動作 簡單的跟著做系列</p>
              <p className="p2">
                <i class="fa-solid fa-clock"></i>2023-06-14
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <style jsx>{`
        .guide {
          position: relative;
          max-width: 300px;
          margin-top: 10px;
          padding-left: 20px;
          color: #e25d31;
          font-size: 23px;
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 0.5);
        }

        .tilte-menu-1 {
          text-align: center;
          font-family: 'Noto Sans TC', sans-serif;
          padding: 20px;
          letter-spacing: 3px;
        }

        .btn {
          display: inline-block;
          width: 120px;
          height: 45px;
          border: 2px solid #676767;
           margin-bottom: 10px;
          border-radius: 50px;
          margin-right: 20px;
          transition: background-color 0.3s, border 0.3s, padding 0.3s;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: -100%; // 镜面效果的初始位置
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5),
            transparent
          ); // 设置渐变背景
          transform: skewY(45deg); // 倾斜
          transition: top 0.3s ease; // 添加过渡效果
        }

        .btn:hover::before {
          top: 0; // 鼠标悬停时移动到显示位置
        }

        .vid-type-style {
          padding-left: 40px;
          list-style: none;
        }

        ul li {
          color: #676767;
          font-family: 'Noto Sans TC', sans-serif;
          font-size: 20px;
          letter-spacing: 0.15em;
        }

        ul a li {
          color: #676767;
        }

        .btn:hover {
          background-color: #e25d31;
          border: 2px solid transparent;
          border-radius: 50px;
        }

        .btn:hover li {
          color: #ffffff;
        }

        @media screen and (max-width: 768px) {
          .guide {
            display: none;
          }
        }
      `}</style>
    </>
  )
}