Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="' +
((__t = ( ctx.tableClass )) == null ? '' : __t) +
'">\n  <thead>\n    <tr>\n      <th>Column 1</th>\n      <th>Column 2</th>\n    </tr>\n  </thead>\n  <tbody>\n    ';
 for (let i = 0; i < ctx.component.numRows; i++) { ;
__p += '\n    <tr>\n        <td>' +
((__t = ( ctx.renderCell(i, 0) )) == null ? '' : __t) +
'</td>\n        <td>' +
((__t = ( ctx.delete(i, 0) )) == null ? '' : __t) +
'</td>\n    </tr>\n    ';
 } ;
__p += '\n  </tbody>\n</table>\n';
return __p
}