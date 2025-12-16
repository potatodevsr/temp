"use client";
import React, { useState } from "react";

export default function VennDiagram() {
  // ตัวแปรที่สามารถเปลี่ยนได้
  const [total, setTotal] = useState(40);
  const [playFootball, setPlayFootball] = useState(18);
  const [playBasketball, setPlayBasketball] = useState(15);
  const [playNeither, setPlayNeither] = useState(12);

  // คำนวณอัตโนมัติ
  const playAtLeastOne = total - playNeither;
  const playBoth = playFootball + playBasketball - playAtLeastOne;
  const footballOnly = playFootball - playBoth;
  const basketballOnly = playBasketball - playBoth;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          แผนภาพเวนน์ - ความน่าจะเป็น
        </h1>

        {/* Input Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            ตั้งค่าข้อมูล
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                จำนวนนักเรียนทั้งหมด
              </label>
              <input
                type="number"
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                เล่นฟุตบอล
              </label>
              <input
                type="number"
                value={playFootball}
                onChange={(e) => setPlayFootball(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                เล่นบาสเก็ตบอล
              </label>
              <input
                type="number"
                value={playBasketball}
                onChange={(e) => setPlayBasketball(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ไม่เล่นทั้งสองอย่าง
              </label>
              <input
                type="number"
                value={playNeither}
                onChange={(e) => setPlayNeither(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Venn Diagram */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            แผนภาพเวนน์
          </h2>
          <div className="flex justify-center">
            <svg width="600" height="450" viewBox="0 0 600 450">
              {/* กรอบนอก */}
              <rect
                x="30"
                y="30"
                width="540"
                height="390"
                fill="none"
                stroke="#374151"
                strokeWidth="3"
                rx="10"
              />
              <text
                x="50"
                y="60"
                fontSize="18"
                fill="#374151"
                fontWeight="bold"
              >
                ทั้งหมด: {total} คน
              </text>

              {/* วงกลมฟุตบอล */}
              <circle
                cx="250"
                cy="225"
                r="110"
                fill="#10b981"
                opacity="0.3"
                stroke="#10b981"
                strokeWidth="3"
              />
              <text
                x="165"
                y="160"
                fontSize="20"
                fill="#047857"
                fontWeight="bold"
              >
                ฟุตบอล
              </text>
              <text
                x="180"
                y="225"
                fontSize="32"
                fill="#047857"
                fontWeight="bold"
              >
                {footballOnly}
              </text>

              {/* วงกลมบาสเก็ตบอล */}
              <circle
                cx="350"
                cy="225"
                r="110"
                fill="#f97316"
                opacity="0.3"
                stroke="#f97316"
                strokeWidth="3"
              />
              <text
                x="370"
                y="160"
                fontSize="20"
                fill="#c2410c"
                fontWeight="bold"
              >
                บาสเก็ตบอล
              </text>
              <text
                x="405"
                y="225"
                fontSize="32"
                fill="#c2410c"
                fontWeight="bold"
              >
                {basketballOnly}
              </text>

              {/* ตรงกลาง (เล่นทั้งสอง) */}
              <text
                x="290"
                y="230"
                fontSize="32"
                fill="#7c3aed"
                fontWeight="bold"
              >
                {playBoth}
              </text>

              {/* ไม่เล่นเลย */}
              <text
                x="480"
                y="370"
                fontSize="28"
                fill="#374151"
                fontWeight="bold"
              >
                {playNeither}
              </text>

              {/* เส้นแบ่ง */}
              <line
                x1="390"
                y1="200"
                x2="420"
                y2="180"
                stroke="#c2410c"
                strokeWidth="2"
              />
              <text x="425" y="185" fontSize="14" fill="#c2410c">
                เล่นเฉพาะบาสฯ
              </text>

              <line
                x1="210"
                y1="200"
                x2="170"
                y2="180"
                stroke="#047857"
                strokeWidth="2"
              />
              <text x="80" y="185" fontSize="14" fill="#047857">
                เล่นเฉพาะฟุตบอล
              </text>

              <line
                x1="300"
                y1="250"
                x2="300"
                y2="280"
                stroke="#7c3aed"
                strokeWidth="2"
              />
              <text x="260" y="300" fontSize="14" fill="#7c3aed">
                เล่นทั้งสองอย่าง
              </text>

              <line
                x1="460"
                y1="360"
                x2="420"
                y2="340"
                stroke="#374151"
                strokeWidth="2"
              />
              <text x="360" y="330" fontSize="14" fill="#374151">
                ไม่เล่นทั้งสองอย่าง
              </text>
            </svg>
          </div>
        </div>

        {/* สรุปผล */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">สรุปผล</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-green-100 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-700">
                {footballOnly}
              </div>
              <div className="text-sm text-gray-600 mt-1">เล่นเฉพาะฟุตบอล</div>
            </div>
            <div className="p-4 bg-orange-100 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-700">
                {basketballOnly}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                เล่นเฉพาะบาสเก็ตบอล
              </div>
            </div>
            <div className="p-4 bg-purple-100 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-700">
                {playBoth}
              </div>
              <div className="text-sm text-gray-600 mt-1">เล่นทั้งสองอย่าง</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <div className="text-3xl font-bold text-gray-700">
                {playNeither}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                ไม่เล่นทั้งสองอย่าง
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
            <p className="text-lg font-semibold text-center">
              ความน่าจะเป็นที่จะเล่นเฉพาะบาสเก็ตบอล
            </p>
            <p className="text-4xl font-bold text-center mt-3">
              {basketballOnly}/{total} ={" "}
              {((basketballOnly / total) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
