$(document).ready(function () {
  $(".btn-login").click(function () {
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#pass").val();
    if (username == "" || email == "" || password == "") {
      Swal.fire("Gagal", "Tidak Boleh Kosong", "warning");
    } else {
      window.location.replace("../home.html");
    }
  });

  $(".btn-mulai").click(function () {
    var nama = $("#nama").val();
    var email = $("#email").val();
    var kotlin = $('input[name="course"]:checked').val();

    if (nama == "" || email == "") {
      Swal.fire("Gagal", "Tidak Boleh Kosong", "warning");
    } else {
      var kelas = $("input[name='course']:checked").val();
      if (kelas == "kotlin") {
        alert("Selamat Bergabung " + nama + " :)");
        window.location.replace("../page-source/course/course-kotlin.html");
      } else if (kelas == "python") {
        alert("Selamat Bergabung " + nama + " :)");
        window.location.replace("../page-source/course/course-py.html");
      } else if (kelas == "java") {
        alert("Selamat Bergabung " + nama + " :)");
        window.location.replace("../page-source/course/course-java.html");
      } else {
        alert("Silahkan Pilih Kelas");
      }
    }
  });

  $(".btn-cetak").click(function () {
    var nama = $("#nama").val();
    $("#namaUser").text(nama);
  });
});
