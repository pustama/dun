//Script Redirect CTRL + U
function redirectCU(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("/");
    return false;
  }
}
document.onkeydown = redirectCU;

//Script Redirect Klik Kanan
function redirectKK(e) {
  if (e.which == 3) {
    window.location.replace("/");
    return false;
  }
}
document.oncontextmenu = redirectKK;

//<![CDATA[
    $.each($(".post-share[data-id]"), function(a, e) {
        var l = $(e).parent().find("#postshares").addClass("share-load"),
            i = new Firebase("https://sukses-3bdcb.firebaseio.com/pages/id/" + $(e).attr("data-id"));
        i.once("value", function(a) {
            var n = a.val(),
                t = !1;
            null == n && (n = {}, n.value = 0, n.url = window.location.href, n.id = $(e).attr("data-id"), t = !0), l.removeClass("share-load").text(n.value), n.value++, "/" != window.location.pathname && (t ? i.set(n) : i.child("value").set(n.value))
        })
    });
//]]>