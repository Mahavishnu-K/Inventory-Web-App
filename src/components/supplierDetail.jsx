import '@/components/supplierDetail.css'

export function SupplierDetail({ isOpen, onClose }) {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="overlay">
                    <div className="supOverlayBackground" onClick={handleOverlayClick}>
                        <div className="supOverlayContainer" onClick={(e) => e.stopPropagation()}>
                            <h2 className="title">Supplier Detail</h2>
                            <div className="detailtext">
                                <h3>Company</h3>
                                <p>Company Name</p>
                            </div>
                            <div className="detailtext">
                                <h3>Supplier</h3>
                                <p>Supplier Name</p>
                            </div>
                            <div className="detailtext">
                                <h3>E mail</h3>
                                <p>Email ID</p>
                            </div>
                            <div className="detailtext">
                                <h3>Contact</h3>
                                <p>phone number</p>
                            </div>
                            <div className="detailtext">
                                <h3>Category</h3>
                                <p>category</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}
