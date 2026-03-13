import { GOOGLE_SHEET_API_URL } from '../config';

export const syncScoreToSheet = async (studentName: string, topicTitle: string, score: number, totalQuestions: number) => {
  if (!GOOGLE_SHEET_API_URL) {
    console.log('Chưa cấu hình link Google Sheet API. Dữ liệu tạm thời chỉ lưu trên máy.');
    return { success: false, message: 'Chưa cấu hình API' };
  }

  try {
    const response = await fetch(GOOGLE_SHEET_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', // Google Apps Script requires text/plain for CORS
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        studentName: studentName || 'Học sinh ẩn danh',
        topicTitle: topicTitle,
        score: score,
        totalQuestions: totalQuestions,
      }),
    });

    const result = await response.json();
    return { success: result.status === 'success', message: 'Đã lưu điểm' };
  } catch (error) {
    console.error('Lỗi khi gửi điểm lên Google Sheet:', error);
    return { success: false, message: 'Lỗi kết nối' };
  }
};
