export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

export function getData(): Promise<number[]> {
    const promise1 = mock(100);
    const promise2 = mock(200);
    const promise3 = mock(300);

    return Promise.all([promise1, promise2, promise3]);
}

export async function catchException(): Promise<string> {
    try {
        await Promise.reject(new Error('my error'));
        return '';
    } catch (err: any) {
        return err.message;
    }
}
