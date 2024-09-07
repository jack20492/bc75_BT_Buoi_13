// Bài tập 1: QUẢN LÝ TUYỂN SINH
function tinhTongDiem(a, b, c, d, e) {
  const total = a + b + c + d + e;
  return total;
}

function ketQuaTotNghiep() {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let chonKhuVuc = document.getElementById("chonKhuVuc").value * 1;
  let chonDoiTuong = document.getElementById("chonDoiTuong").value * 1;
  let diemMonThu_1 = document.getElementById("diemMonThu_1").value * 1;
  let diemMonThu_2 = document.getElementById("diemMonThu_2").value * 1;
  let diemMonThu_3 = document.getElementById("diemMonThu_3").value * 1;

  let tongDiem = tinhTongDiem(
    chonKhuVuc,
    chonDoiTuong,
    diemMonThu_1,
    diemMonThu_2,
    diemMonThu_3
  );

  let ketQua;
  if (
    tongDiem >= diemChuan &&
    diemMonThu_1 > 0 &&
    diemMonThu_2 > 0 &&
    diemMonThu_3 > 0
  ) {
    ketQua = "Bạn đã đậu";
  } else if (tongDiem >= diemChuan && diemMonThu_1 <= 0) {
    ketQua = `Bạn đã rớt do điểm môn thứ nhất của bạn là điểm liệt `;
  } else if (tongDiem >= diemChuan && diemMonThu_2 <= 0) {
    ketQua = `Bạn đã rớt do điểm môn thứ hai của bạn là điểm liệt `;
  } else if (tongDiem >= diemChuan && diemMonThu_3 <= 0) {
    ketQua = `Bạn đã rớt do điểm môn thứ ba của bạn là điểm liệt `;
  } else if (tongDiem < diemChuan) {
    ketQua = `Bạn đã rớt`;
  }

  const txtResult = document.getElementById("txtResult");
  txtResult.innerHTML = `${ketQua}. Tổng điểm của bạn là: ${tongDiem}`;
}

// Bài tập 2: TÍNH TIỀN ĐIỆN

function tinhTienDien() {
  let soKW = document.getElementById("soKW").value * 1;
  let hoTen = document.getElementById("nhapHoTen").value;

  let tongTienDien;
  if (soKW <= 50) {
    tongTienDien = soKW * 500;
  } else if (soKW > 50 && soKW <= 100) {
    tongTienDien = 50 * 500 + (soKW - 50) * 650;
  } else if (soKW > 100 && soKW <= 200) {
    tongTienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  } else if (soKW > 150 && soKW <= 350) {
    tongTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else if (soKW > 350) {
    tongTienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  } else {
    alert(`Số tiền không hợp lệ`);
  }

  let formatTienDien = Intl.NumberFormat().format(tongTienDien);
  const txtResult_1 = document.getElementById("txtResult_1");
  txtResult_1.innerHTML = `Họ tên: ${hoTen}. Số tiền điện là ${formatTienDien} VND.`;
}

// Bài tập 3: TÍNH THUẾ THU NHẬP CÁ NHÂN

function tinhThueTNCN() {
  let hoTen_1 = document.getElementById("nhapHoTen_1").value;
  let tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

  let thueTNCN;
  if (thuNhapChiuThue <= 60000000) {
    thueTNCN = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    thueTNCN = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    thueTNCN = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    thueTNCN = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    thueTNCN = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    thueTNCN = thuNhapChiuThue * 0.3;
  } else if (thuNhapChiuThue > 960000000) {
    thueTNCN = thuNhapChiuThue * 0.35;
  } else {
    thueTNCN = "Số tiền nhập không hợp lệ";
  }

  let formatTienThue = Intl.NumberFormat().format(thueTNCN);

  const txtResult_2 = document.getElementById("txtResult_2");
  txtResult_2.innerHTML = `Họ tên: ${hoTen_1}. Tiền thuế thu nhập cá nhân: ${formatTienThue} VND.`;
}
