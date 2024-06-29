function equalsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

function getDateByOffset(offset: number): string {
    const today = new Date();
    const targetDate = new Date(today.getTime() + offset * 24 * 60 * 60 * 1000);
    const day = targetDate.getDate().toString().padStart(2, '0');
    const month = (targetDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要加1
    return `${day}/${month}`;
}

function isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

export  {
    equalsIgnoreCase,
    getDateByOffset,
    isNumber
};