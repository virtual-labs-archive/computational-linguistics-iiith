function set_512e3() {
  document.rsatest.n.value="BC86E3DC782C446EE756B874ACECF2A115E613021EAF1ED5EF295BEC2BED899D\n26FE2EC896BF9DE84FE381AF67A7B7CBB48D85235E72AB595ABF8FE840D5F8DB";
  document.rsatest.e.value="3";
}
function set_512f4() {
  document.rsatest.n.value="C4E3F7212602E1E396C0B6623CF11D26204ACE3E7D26685E037AD2507DCE82FC\n28F2D5F8A67FC3AFAB89A6D818D1F4C28CFA548418BD9F8E7426789A67E73E41";
  document.rsatest.e.value="10001";
}
function set_1024e3() {
  document.rsatest.n.value="ABC30681295774F7CECA691EC17F4E762DA6DE70F198EAEE3CCE3A435FC006B9\n71DC24E55904F1D2705758C041C2B0B18E8BFAE2C9CD96B50082D7D8C7342CBA\nB7F6E0622DA53B8B56DBDB24174F00173263CFECAE604795CDA2A037BC3A69B7\nC0090AA2DE1568998BCD6D70CC2E0574755B9F7986AE01CE8714A26144279CDB";
  document.rsatest.e.value="3"
}
function set_1024f4() {
  document.rsatest.n.value="a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99\naf3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c06\n5168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4\nc2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
  document.rsatest.e.value="10001";
}

function hex2a_mine(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function do_encrypt() {
  if(document.getElementById('hash_value').value != document.rsatest.plaintext.value) {
    alert("Hash output and input to RSA should be same!");
    return;
  }
  var before = new Date();
  var rsa = new RSAKey();
  rsa.setPublic(document.rsatest.n.value, document.rsatest.e.value);
  var res = rsa.encrypt(hex2a_mine(document.rsatest.plaintext.value));
  var after = new Date();
  if(res) {
    document.rsatest.ciphertext.value = linebrk(res, 64);
    document.rsatest.cipherb64.value = linebrk(hex2b64(res), 64);
    document.rsatest.status.value = "Time: " + (after - before) + "ms";
  }
}

