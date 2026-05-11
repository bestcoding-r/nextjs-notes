import { db } from '@/app/config/db'

export default async function StaticPage() {
    try {
        // [doctors] likhne se sirf table ka data (rows) nikalta hai
        const [doctors] = await db.execute('select * from doctors'); 
        
        console.log(doctors); // Ab aapko console mein saaf array nazar aayega

        return (
            <div style={{ padding: '20px' }}>
                <h1>Doctors List</h1>
                
                <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
                    {/* Map function yahan start hota hai */}
                    {doctors.map((doctor) => (
                        <div key={doctor.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                            <h3>{doctor.first_name}</h3>
                            <p>Specialization: {doctor.specialization}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Database error:", error);
        return <h1>Data load nahi ho saka.</h1>;
    }
}