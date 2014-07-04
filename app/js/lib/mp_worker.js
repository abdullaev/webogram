/*!
 * Webogram v0.2 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

importScripts(
  '../../vendor/console-polyfill/console-polyfill.js',
  'bin_utils.js',
  '../../vendor/leemon_bigint/bigint.js',
  '../../vendor/jsbn/jsbn_combined.js'
);

onmessage = function (e) {
  postMessage(bytesModPow(e.data[0], e.data[1], e.data[2]));
}
