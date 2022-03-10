val lnInvoiceT: Try[LnInvoice] = LnInvoice.fromStringT(string = "lnbc1u1p0d0k6npp5qndcvujqf47244g6yhd3laqj8c3ckummaahrs375gsgau4upg32qdq623jhxapqv3jhxcmjd9c8g6t0dccqzpgxqrrssrzjqvgptfurj3528snx6e3dtwepafxw5fpzdymw9pj20jj09sunnqmwqz2uagqqjjgqqqqqqqlgqqqqqqgq9qsp5nyg950yy703ah6sazalytaksg0lvyxq3veze5lqswp6rh3jx9css9qy9qsq0d4vhtxkkvse0yx8cgcpemhzatw2wtyvy04ve7n0j3k78l40qpqpvg07vjldvn8zx6nana6glmnlwqvm4fz0pttw7k3rh7wzr48nccsqhnd8wv")
// lnInvoiceT: Try[LnInvoice] = Success(lnbc1u1p0d0k6npp5qndcvujqf47244g6yhd3laqj8c3ckummaahrs375gsgau4upg32qdq623jhxapqv3jhxcmjd9c8g6t0dccqzpgxqrrssrzjqvgptfurj3528snx6e3dtwepafxw5fpzdymw9pj20jj09sunnqmwqz2uagqqjjgqqqqqqqlgqqqqqqgq9qsp5nyg950yy703ah6sazalytaksg0lvyxq3veze5lqswp6rh3jx9css9qy9qsq0d4vhtxkkvse0yx8cgcpemhzatw2wtyvy04ve7n0j3k78l40qpqpvg07vjldvn8zx6nana6glmnlwqvm4fz0pttw7k3rh7wzr48nccsqhnd8wv)

val paymentPreImage = PaymentPreimage(hex"a8c5260174cab81047ba14e8fd96b23074aec7407867343b2d270861e3f0ee66")
// paymentPreImage: PaymentPreimage = PaymentPreimage(ByteVector(32 bytes, 0xa8c5260174cab81047ba14e8fd96b23074aec7407867343b2d270861e3f0ee66))

val paymentSecret = PaymentSecret(hex"f19d44f4d5fd6a25a7dba8cc84954f2156c2d48db4785b586fdea95561c295b8")
// paymentSecret: PaymentSecret = PaymentSecret(ByteVector(32 bytes, 0xf19d44f4d5fd6a25a7dba8cc84954f2156c2d48db4785b586fdea95561c295b8))

val nodeId = NodeId(ECPublicKey("034f355bdcb7cc0af728ef3cceb9615d90684bb5b2ca5f859ab0f0b704075871aa"))
// nodeId: NodeId = 034f355bdcb7cc0af728ef3cceb9615d90684bb5b2ca5f859ab0f0b704075871aa

val millsats100 = MilliSatoshis(BigInt(100))
// millsats100: MilliSatoshis = 100 msats
