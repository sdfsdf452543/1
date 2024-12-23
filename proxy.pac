
function FindProxyForURL(url, host) {
    // 如果是本地地址，不使用代理
    if (isPlainHostName(host) || dnsDomainIs(host, "localhost")) {
        return "DIRECT";
    }

    // 如果目標域名是特定的，可以設定特定代理
    if (dnsDomainIs(host, "example.com")) {
        return "PROXY ff520520596-zone-resi-region-tw.tuf.as.pyproxy.io:16666";
    }

    // 預設使用代理
    return "PROXY ff520520596-zone-resi-region-tw.tuf.as.pyproxy.io:16666";
}
