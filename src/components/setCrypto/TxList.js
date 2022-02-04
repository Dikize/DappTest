export default function TxList({ txs }) {
    if (txs.length === 0) return null;
    return (
        <>
            {txs.map((item) => (
                <div key={item.txHash} className="alert-info mt-5 rounded-xl py-2 px-4">
                    <h5>From: {item.from}</h5>
                    <h5>To: {item.to}</h5>
                    <h5>Amount: {item.amount}</h5>
                    <a href={`https://bscscan.com/tx/${item.txHash}`} target="_blank" rel="noreferrer">Check in block explorer</a>
                </div>
            ))}
        </>
    );
}
