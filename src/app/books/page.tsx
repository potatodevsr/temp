"use client";
import React, { useState } from "react";
import { BookOpen, GitBranch, Database, UserPlus } from "lucide-react";

const BookSystemPrototype = () => {
  const [activeTab, setActiveTab] = useState("flow");

  const FlowDiagram = () => (
    <div className="w-full h-full p-8 bg-gray-50 overflow-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Flow Diagram - ระบบขายหนังสือออนไลน์
      </h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Start */}
        <div className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
          เริ่มต้น
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>

        {/* User Access */}
        <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
          ผู้ใช้เข้าสู่ระบบ
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>

        {/* Check Member */}
        <div className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg">
          ตรวจสอบสมาชิก
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">ไม่เป็นสมาชิก</div>
            <div className="h-8 w-0.5 bg-gray-400"></div>
            <div className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg">
              ลงทะเบียนสมาชิก
            </div>
            <div className="h-4 w-0.5 bg-gray-400"></div>
            <div className="bg-white border-2 border-gray-300 px-4 py-2 rounded shadow">
              <div className="text-sm">• สมาชิกทั่วไป</div>
              <div className="text-sm">• นักเรียน/นักศึกษา</div>
              <div className="text-sm">• ร้านค้า</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-2">เป็นสมาชิก</div>
            <div className="h-8 w-0.5 bg-gray-400"></div>
            <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg">
              เลือกดูหนังสือ
            </div>
          </div>
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>

        {/* Browse Books */}
        <div className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg">
          ดูรายละเอียดหนังสือ
        </div>

        <div className="bg-white border-2 border-gray-300 px-4 py-2 rounded shadow">
          <div className="text-sm">• รูปภาพหนังสือ</div>
          <div className="text-sm">• ราคาหนังสือ</div>
          <div className="text-sm">• ประเภทหนังสือ</div>
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>

        {/* Add to Cart */}
        <div className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg">
          เลือกซื้อหนังสือ
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>

        {/* Cart */}
        <div className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg">
          บันทึกลงตะกร้าสินค้า
        </div>

        <div className="bg-white border-2 border-gray-300 px-4 py-2 rounded shadow">
          <div className="text-sm">• ข้อมูลคำสั่งซื้อ</div>
          <div className="text-sm">• ชื่อหนังสือ</div>
          <div className="text-sm">• จำนวนเล่ม</div>
          <div className="text-sm">• ราคารวม</div>
        </div>

        <div className="h-8 w-0.5 bg-gray-400"></div>

        {/* End */}
        <div className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
          สิ้นสุด
        </div>
      </div>
    </div>
  );

  const ERDiagram = () => (
    <div className="w-full h-full p-8 bg-gray-50 overflow-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        ER Diagram - ระบบขายหนังสือออนไลน์
      </h2>

      <div className="flex flex-wrap justify-center gap-8 items-start">
        {/* Member Entity */}
        <div className="bg-white border-2 border-blue-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-blue-500 text-white text-center py-2 rounded font-bold mb-2">
            สมาชิก (Member)
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสสมาชิก</span> (PK)
            </div>
            <div>ชื่อ-นามสกุล</div>
            <div>อีเมล</div>
            <div>วันเกิด</div>
            <div>เบอร์โทรศัพท์</div>
            <div>ประเภทสมาชิก</div>
          </div>
        </div>

        {/* General Member */}
        <div className="bg-white border-2 border-green-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-green-500 text-white text-center py-2 rounded font-bold mb-2">
            สมาชิกทั่วไป
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสสมาชิก</span> (FK)
            </div>
            <div>รหัสสมัครประชาชน</div>
          </div>
        </div>

        {/* Student Member */}
        <div className="bg-white border-2 border-purple-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-purple-500 text-white text-center py-2 rounded font-bold mb-2">
            นักเรียน/นักศึกษา
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสสมาชิก</span> (FK)
            </div>
            <div>ชื่อสถานศึกษา</div>
            <div>รหัสประจำตัวนักเรียน</div>
            <div>แบบรูปการพิมพ์นักศึกษา</div>
            <div>ภาควิชา</div>
          </div>
        </div>

        {/* Store Member */}
        <div className="bg-white border-2 border-orange-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-orange-500 text-white text-center py-2 rounded font-bold mb-2">
            ร้านค้า
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสสมาชิก</span> (FK)
            </div>
            <div>ชื่อผู้ประกอบการ</div>
            <div>ชื่อสถานประกอบการ</div>
            <div>เลขทะเบียนนิติบุคคล</div>
            <div>ใบอนุญาตสถานนิติบุคคล</div>
          </div>
        </div>

        {/* Book Entity */}
        <div className="bg-white border-2 border-red-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-red-500 text-white text-center py-2 rounded font-bold mb-2">
            หนังสือ (Book)
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสหนังสือ</span> (PK)
            </div>
            <div>ชื่อหนังสือ</div>
            <div>รูปภาพหนังสือ</div>
            <div>ราคาหนังสือ</div>
            <div>ประเภทหนังสือ</div>
          </div>
        </div>

        {/* Order Entity */}
        <div className="bg-white border-2 border-indigo-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-indigo-500 text-white text-center py-2 rounded font-bold mb-2">
            คำสั่งซื้อ (Order)
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสคำสั่งซื้อ</span> (PK)
            </div>
            <div>รหัสสมาชิก (FK)</div>
            <div>วันที่สั่งซื้อ</div>
            <div>ราคารวมทั้งหมด</div>
          </div>
        </div>

        {/* Order Detail Entity */}
        <div className="bg-white border-2 border-pink-500 rounded-lg p-4 shadow-lg w-64">
          <div className="bg-pink-500 text-white text-center py-2 rounded font-bold mb-2">
            รายละเอียดคำสั่งซื้อ
          </div>
          <div className="text-sm space-y-1">
            <div className="border-b pb-1">
              <span className="font-semibold">รหัสรายละเอียด</span> (PK)
            </div>
            <div>รหัสคำสั่งซื้อ (FK)</div>
            <div>รหัสหนังสือ (FK)</div>
            <div>จำนวนเล่ม</div>
            <div>ราคารวม</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p className="text-sm">
          ความสัมพันธ์: สมาชิก (1) → (N) คำสั่งซื้อ (1) → (N)
          รายละเอียดคำสั่งซื้อ (N) → (1) หนังสือ
        </p>
      </div>
    </div>
  );

  const RegistrationForm = () => {
    const [memberType, setMemberType] = useState("general");

    return (
      <div className="w-full h-full p-8 bg-gray-50 overflow-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          แบบฟอร์มลงทะเบียนสมาชิก
        </h2>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Member Type Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-3">
              ประเภทสมาชิก *
            </label>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setMemberType("general")}
                className={`border-2 py-3 rounded-lg font-semibold transition ${
                  memberType === "general"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                สมาชิกทั่วไป
              </button>
              <button
                onClick={() => setMemberType("student")}
                className={`border-2 py-3 rounded-lg font-semibold transition ${
                  memberType === "student"
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                นักเรียน/นักศึกษา
              </button>
              <button
                onClick={() => setMemberType("store")}
                className={`border-2 py-3 rounded-lg font-semibold transition ${
                  memberType === "store"
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                ร้านค้า
              </button>
            </div>
          </div>

          <hr className="my-6" />

          {/* Common Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ชื่อ-นามสกุล *
              </label>
              <input
                type="text"
                placeholder="กรอกชื่อ-นามสกุล"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                อีเมล *
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  วันเกิด *
                </label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  เบอร์โทรศัพท์ *
                </label>
                <input
                  type="tel"
                  placeholder="0XX-XXX-XXXX"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Specific Fields Based on Member Type */}
            {memberType === "general" && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3">
                  ข้อมูลเฉพาะสมาชิกทั่วไป
                </h3>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    รหัสบัตรประชาชน *
                  </label>
                  <input
                    type="text"
                    placeholder="X-XXXX-XXXXX-XX-X"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {memberType === "student" && (
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-3">
                  ข้อมูลเฉพาะนักเรียน/นักศึกษา
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ชื่อสถานศึกษา *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกชื่อสถานศึกษา"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      รหัสประจำตัวนักเรียน/นักศึกษา *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกรหัสประจำตัว"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      แบบรูปการพิมพ์นักศึกษา *
                    </label>
                    <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none">
                      <option value="">เลือกแบบรูปการพิมพ์</option>
                      <option value="fulltime">เต็มเวลา (Full-time)</option>
                      <option value="parttime">นอกเวลา (Part-time)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ภาควิชา *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกภาควิชา"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {memberType === "store" && (
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-3">
                  ข้อมูลเฉพาะร้านค้า
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ชื่อผู้ประกอบการ *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกชื่อผู้ประกอบการ"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ชื่อสถานประกอบการ *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกชื่อสถานประกอบการ"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      เลขทะเบียนนิติบุคคล *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกเลขทะเบียนนิติบุคคล"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ใบอนุญาตสถานนิติบุคคล *
                    </label>
                    <input
                      type="text"
                      placeholder="กรอกเลขใบอนุญาต"
                      className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              className={`flex-1 text-white py-3 rounded-lg font-semibold transition shadow-lg ${
                memberType === "general"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : memberType === "student"
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              ลงทะเบียน
            </button>
            <button className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    );
  };

  const tabs = [
    { id: "flow", label: "Flow Diagram", icon: GitBranch },
    { id: "er", label: "ER Diagram", icon: Database },
    { id: "form", label: "แบบฟอร์ม", icon: UserPlus },
  ];

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
        <div className="flex items-center justify-center space-x-3">
          <BookOpen size={32} />
          <h1 className="text-3xl font-bold">ระบบขายหนังสือออนไลน์</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b bg-gray-100">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-semibold transition ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "flow" && <FlowDiagram />}
        {activeTab === "er" && <ERDiagram />}
        {activeTab === "form" && <RegistrationForm />}
      </div>
    </div>
  );
};

export default BookSystemPrototype;
