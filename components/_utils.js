export const DEFAULT_FONT_SIZE = parseInt(window.getComputedStyle(document.body).fontSize);

export function klas() {
  let list = [];
  const len = arguments.length;
  for (let i = 0; i < len; i++) {
    let c = arguments[i];
    if (typeof arguments[i] === 'string') {
      list.push(c);
    } else {
      for (let k in c) {
        k && c[k] && list.push(k);
      }
    }
  }
  return list.join(' ');
}

export const osIsWin = navigator.userAgent.indexOf('Windows') > -1;

export function html2txt(html) {
  html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
  html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
  html = html.replace(/<\/div>/ig, '\n');
  html = html.replace(/<\/li>/ig, '\n');
  html = html.replace(/<li>/ig, '  *  ');
  html = html.replace(/<\/ul>/ig, '\n');
  html = html.replace(/<\/p>/ig, '\n');
  html = html.replace(/<br\s*[\/]?>/gi, "\n");
  html = html.replace(/<[^>]+>/ig, '');
  return html;
}