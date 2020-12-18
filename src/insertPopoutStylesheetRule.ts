import PopoutMap from "./popoutMap";

export default function insertPopoutStylesheetRule(rule: string) {
  Object.keys(PopoutMap).forEach((popoutKey: string) => {
    const popout = PopoutMap[popoutKey];
    if (popout.child && popout.styleElement) {
      try {
        // tslint:disable-next-line:no-any
        const { sheet }: any = popout.styleElement;
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        /* no-op on errors */
      }
    }
  });
}
