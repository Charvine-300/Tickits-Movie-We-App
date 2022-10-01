 
export const openModal = (modalPath: string) => {
  window.location.hash = modalPath;
  window.location.reload();
};

export const removeHash = () => {
  window.history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search,
  );
  window.dispatchEvent(new Event('hashchange'));
};

export const requestHelper = async (
  url: string,
  args: Record<string, unknown>,
): Promise<{ success: boolean; data: unknown }> => {
  try {
    const response = await window.fetch(url, args);
    const data = await response.json();
    return { success: true, data };
  } catch (err) {
    let error;
    if (err && err instanceof Response) {
      error = await err.json();
    }
    return { success: false, data: error };
  }
};

export function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export function formatMoney(
  amount: string | number,
  decimalCount = 2,
  decimal = '.',
  thousands = ',',
) {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = Number.isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    const i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
      10,
    ).toString();
    const j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substring(0, j) + thousands : '') +
      i.substring(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
      (decimalCount
        ? decimal +
          Math.abs(parseInt(amount, 10) - parseInt(i, 10))
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj, ) as (keyof Obj)[];
}