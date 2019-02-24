import reqwest from 'reqwest';
import {
    Modal,
    Notification
} from 'antd';
(function(win) {
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };



    function jumpLoginPage() {
        localStorage.clear();
       window.location.reload()
    }

    function error() {
        Modal.error({
            title: "系统忙，请稍后重试"
        });
    }
    var Cookies = {
        set: function(name, value) {
            var argv = arguments;
            var argc = arguments.length;
            var expires = (argc > 2) ? argv[2] : null;
            var path = (argc > 3) ? argv[3] : '/';
            var domain = (argc > 4) ? argv[4] : null;
            var secure = (argc > 5) ? argv[5] : false;
            document.cookie = name + "=" + escape(value) +
                ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
                ((path == null) ? "" : ("; path=" + path)) +
                ((domain == null) ? "" : ("; domain=" + domain)) +
                ((secure == true) ? "; secure" : "");
        },
        get: function(name) {
            var arg = name + "=";
            var alen = arg.length;
            var clen = document.cookie.length;
            var i = 0;
            var j = 0;
            while (i < clen) {
                j = i + alen;
                if (document.cookie.substring(i, j) == arg)
                    return Cookies.getCookieVal(j);
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0)
                    break;
            }
            return null;
        },
        clear: function(name) {
            if (Cookies.get(name)) {
                document.cookie = name + "=" +
                    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
            }
        },
        getCookieVal: function(offset) {
            var endstr = document.cookie.indexOf(";", offset);
            if (endstr == -1) {
                endstr = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, endstr));
        }
    };
    var NavLine = {
        _isInView: function(el, target) {
            var container = target;
            var winH = container.clientHeight,
                scrollTop = container.scrollTop,
                scrollBottom = scrollTop + winH,
                elTop = el.offsetTop,
                elBottom = elTop + el.offsetHeight - 20;

            return (elTop < scrollBottom) && (elBottom > scrollTop);
        },
        _handleSpy: function(navLineData, e) {
            var items = Object.keys(navLineData).map((key, i) => {
                return navLineData[key].substring(1);
            });
            var targetItems = items.map(function(item) {
                return document.getElementById(item);
            });
            var hasInViewAlready = false;
            targetItems.forEach((el, index) => {
                if (!hasInViewAlready) {
                    if (NavLine._isInView(el, e.target)) {
                        this.refs.NavLine.handleClickItem('#' + items[index]);
                        hasInViewAlready = true;
                    }
                }
            });
        }
    };

    var Utils = {

        transfer(arry) {
            arry.forEach(function(element) {
                element["label"] = element["text"];
                delete element.text;
                element["value"] = element["id"];
                element["key"] = element["id"];
                delete element.id;
                if (element.children) {
                    this.transfer(element.children)
                }
            }, this);
        },
        number:function(num){
            var num = String(num).replace(/\$|\,/g,'');
            if(isNaN(num))
                num = "0";
            var sign = (num == (num = Math.abs(num)));
            num = Math.floor(num*100+0.50000000001);
            var cents = num%100;
            num = Math.floor(num/100).toString();
            if(cents<10)
                cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
                num = num.substring(0,num.length-(4*i+3))+','+
                    num.substring(num.length-(4*i+3));
            return (((sign)?'':'-') + num + '.' + cents);
        },



        ajaxData: function(obj) {
            reqwest({
                url: obj.url,
                method: obj.method || 'post',
                data: obj.data,
                success: function(result) {
                    if (typeof result == 'string' && /<!DOCTYPE html>/.test(result)) {
                        jumpLoginPage();
                    }
                    else if (result.code == 200 || result.code == 400) {
                        obj.callback(result);
                    } else {
                        Modal.error({
                            title: result.msg,
                            onOk: () => {
                                if (result.code == "800") {
                                    jumpLoginPage();
                                }
                            }
                        });
                    }

                },
                error: function(err) {
                    error();
                }
            });
        },


    }

    win.Utils = Utils;
    win.Cookies = Cookies;
    win.NavLineUtils = NavLine;

})(window)