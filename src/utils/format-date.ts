export const FormatDate = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

