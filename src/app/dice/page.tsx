"use client";
import React, { useState } from "react";
import { Dices } from "lucide-react";

interface HistoryItem {
  dice1: number;
  dice2: number;
  sum: number;
  diff: number;
}

export default function DiceProbability() {
  const [dice1, setDice1] = useState<number | null>(null);
  const [dice2, setDice2] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const rollDice = () => {
    setIsRolling(true);

    // Animate rolling
    const interval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }, 100);

    // Stop after 1 second
    setTimeout(() => {
      clearInterval(interval);
      const finalDice1 = Math.floor(Math.random() * 6) + 1;
      const finalDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1(finalDice1);
      setDice2(finalDice2);
      setIsRolling(false);

      const sum = finalDice1 + finalDice2;
      const diff = Math.abs(finalDice1 - finalDice2);
      setHistory((prev) => [
        ...prev,
        { dice1: finalDice1, dice2: finalDice2, sum, diff },
      ]);
    }, 1000);
  };

  const reset = () => {
    setDice1(null);
    setDice2(null);
    setHistory([]);
  };

  const sum = dice1 && dice2 ? dice1 + dice2 : 0;
  const diff = dice1 && dice2 ? Math.abs(dice1 - dice2) : 0;

  // Calculate statistics
  const sumIs10Count = history.filter((h) => h.sum === 10).length;
  const diffIs2Count = history.filter((h) => h.diff === 2).length;
  const totalRolls = history.length;

  const renderDice = (value: number) => {
    const dots: Record<number, [number, number][]> = {
      1: [[1, 1]],
      2: [
        [0, 0],
        [2, 2],
      ],
      3: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      4: [
        [0, 0],
        [0, 2],
        [2, 0],
        [2, 2],
      ],
      5: [
        [0, 0],
        [0, 2],
        [1, 1],
        [2, 0],
        [2, 2],
      ],
      6: [
        [0, 0],
        [0, 1],
        [0, 2],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    };

    return (
      <div className="w-24 h-24 bg-white rounded-lg shadow-lg grid grid-cols-3 grid-rows-3 gap-1 p-3">
        {[...Array(9)].map((_, i) => {
          const row = Math.floor(i / 3);
          const col = i % 3;
          const hasDot =
            value && dots[value]?.some(([r, c]) => r === row && c === col);
          return (
            <div key={i} className="flex items-center justify-center">
              {hasDot && (
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Dices className="w-8 h-8 text-purple-600" />
              <h1 className="text-3xl font-bold text-gray-800">
                ทดลองลูกเต้า 2 ลูก
              </h1>
            </div>
            <p className="text-gray-600">หาความน่าจะเป็นที่:</p>
            <div className="mt-2 text-sm text-gray-700">
              <p>1. ผลรวมของแต้มเป็น 10</p>
              <p>2. ผลต่างของแต้มเป็น 2</p>
            </div>
          </div>

          {/* Dice Display */}
          <div className="flex justify-center items-center gap-8 mb-8">
            {dice1 ? (
              renderDice(dice1)
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-400 text-xl">?</span>
              </div>
            )}
            {dice2 ? (
              renderDice(dice2)
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-gray-400 text-xl">?</span>
              </div>
            )}
          </div>

          {/* Current Result */}
          {dice1 && dice2 && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                ผลการทอดครั้งนี้:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">ผลรวม</p>
                  <p className="text-3xl font-bold text-blue-600">{sum}</p>
                  <p
                    className={`text-sm mt-1 ${
                      sum === 10
                        ? "text-green-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {sum === 10 ? "✓ ผลรวมเป็น 10!" : "ผลรวมไม่ใช่ 10"}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">ผลต่าง</p>
                  <p className="text-3xl font-bold text-purple-600">{diff}</p>
                  <p
                    className={`text-sm mt-1 ${
                      diff === 2
                        ? "text-green-600 font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {diff === 2 ? "✓ ผลต่างเป็น 2!" : "ผลต่างไม่ใช่ 2"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={rollDice}
              disabled={isRolling}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              {isRolling ? "กำลังทอด..." : "ทอดลูกเต๋า"}
            </button>
            <button
              onClick={reset}
              className="px-8 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors shadow-lg"
            >
              เริ่มใหม่
            </button>
          </div>

          {/* Statistics */}
          {totalRolls > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">
                สถิติ ({totalRolls} ครั้ง):
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600 mb-1">ผลรวม = 10</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {sumIs10Count}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ความน่าจะเป็น:{" "}
                    {((sumIs10Count / totalRolls) * 100).toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-400 mt-1">(ทฤษฎี: 8.33%)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600 mb-1">ผลต่าง = 2</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {diffIs2Count}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ความน่าจะเป็น:{" "}
                    {((diffIs2Count / totalRolls) * 100).toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-400 mt-1">(ทฤษฎี: 22.22%)</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-4">
                <p className="font-semibold mb-1">ความน่าจะเป็นตามทฤษฎี:</p>
                <p>• ผลรวม = 10: 3/36 = 8.33% (กรณี: 4+6, 5+5, 6+4)</p>
                <p>
                  • ผลต่าง = 2: 8/36 = 22.22% (กรณี: 1+3, 2+4, 3+1, 3+5, 4+2,
                  4+6, 5+3, 6+4)
                </p>
              </div>
            </div>
          )}

          {/* Recent History */}
          {history.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                ประวัติการทอด:
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 max-h-48 overflow-y-auto">
                <div className="space-y-2">
                  {history
                    .slice(-10)
                    .reverse()
                    .map((h, i) => (
                      <div
                        key={history.length - i}
                        className="flex items-center gap-4 text-sm bg-white p-2 rounded"
                      >
                        <span className="text-gray-500">
                          #{history.length - i}
                        </span>
                        <span className="font-mono">
                          🎲 {h.dice1} + {h.dice2}
                        </span>
                        <span
                          className={
                            h.sum === 10
                              ? "text-green-600 font-semibold"
                              : "text-gray-600"
                          }
                        >
                          รวม: {h.sum}
                        </span>
                        <span
                          className={
                            h.diff === 2
                              ? "text-green-600 font-semibold"
                              : "text-gray-600"
                          }
                        >
                          ต่าง: {h.diff}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
