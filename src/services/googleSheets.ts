import { GOOGLE_SHEET_API_URL } from '../config';

export const syncScoreToSheet = async (
  studentName: string, 
  topicTitle: string, 
  score: number, 
  totalQuestions: number,
  appVersion: string // 1. THEM THAM SO NAY DE NHAN TU RESULT.TSX
) => {
  if (!GOOGLE_SHEET_API_URL) {
    console.log('Chua cau hinh link Google Sheet API. Du lieu tam thoi chi luu tren may.');
    return { success: false, message: 'Chua cau hinh API' };
  }

  try {
    const response = await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', // Google Apps Script requires text/plain for CORS
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        studentName: studentName || 'Hoc sinh an danh',
        topicTitle: topicTitle,
        score: score,
        totalQuestions: totalQuestions,
        appVersion: appVersion, // 2. DONG GOI PHIEN BAN DE GUI CHO GOOGLE SCRIPT
      }),
    });

    const result = await response.json();
    return { success: result.status === 'success', message: 'Da luu diem' };
  } catch (error) {
    console.error('Loi khi gui diem len Google Sheet:', error);
    return { success: false, message: 'Loi ket noi' };
  }
};