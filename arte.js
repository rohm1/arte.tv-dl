jQuery.ajax({
    url: jQuery('[arte_vp_url]').attr('arte_vp_url'),
    success: function(d) {
        var items = {},
            html = '<div style="background: rgba(200, 200, 200, .7); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000;"><div style="width: 500px; height: 600px; overflow: auto; margin: 100px auto 0;">',
            x, i, item;
 
        jQuery.each(d.videoJsonPlayer.VSR, function(i, item) {
            if (item.url.indexOf('http://') != 0) {
                return;
            }
 
            if (!items[item.quality]) {
                items[item.quality] = [];
            }
 
            items[item.quality].push(item);
        });
 
        for (x in items) {
            item = items[x];
            html += '<h2>' + x + '</h2><table>';
 
            for (i = 0 ; i < item.length ; i++) {
                html += '<tr><td style="width: 220px;">' + item[i].versionLibelle + ' (' + item[i].versionCode + ')' + '</td><td><input type="text"onclick="this.select();" value="' + item[i].url + '" /></td></tr>';
            }
 
            html += '</table>';
        }
 
        html += '<br /><div style="text-align: center;"><a href="javascript:void(0);" onclick="javascript: jQuery(this).parent().parent().parent().remove(); return false;">fermer</a></div>';
 
        html += '</div></div>';
 
        jQuery('body').append(html);
    }
});

