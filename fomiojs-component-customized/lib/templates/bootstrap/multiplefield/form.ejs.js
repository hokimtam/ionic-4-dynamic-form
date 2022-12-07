Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="' +
((__t = ( ctx.tableClass )) == null ? '' : __t) +
'">\n  <thead>\n    <tr>\n      <th>' +
((__t = ( ctx.tableClass )) == null ? '' : __t) +
'</th>\n      <th>\n\n        <button ref="addRowzzz" class="btn btn-secondary" type="button">\n          <i class="fa fa-times-circle-o"></i>\n        </button>\n      </th>\n    </tr>\n  </thead>\n  ' +
((__t = (console.log(ctx))) == null ? '' : __t) +
'\n  <tbody>\n    ';
 for (let i = 0; i < ctx.instance.items.length; i++) { ;
__p += ' <tr>\n      <td>' +
((__t = ( ctx.renderCell(i, 0) )) == null ? '' : __t) +
'</td>\n      <td>\n        <button ref=\'' +
((__t = ("removeRowzz-" +i)) == null ? '' : __t) +
'\'\' class="btn btn-secondary" type="button">\n          <i class="fa fa-times-circle-o"></i>\n        </button>\n      </td>\n    </tr>\n    ';
 } ;
__p += '\n  </tbody>\n</table>';
return __p
}