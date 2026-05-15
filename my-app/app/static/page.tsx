import { db } from '@/app/config/db'
import { cache } from 'react'

// Database se data lane wala function cache ho jayega
const getDoctors = cache(async () => {
  const [rows] = await db.execute('select * from doctors');
  return rows;
});    
   
export default async function StaticPage() {
    try {
        // Ab hum cached function call karenge
        const doctors = await getDoctors() as any[]; 
        
        if (!doctors || doctors.length === 0) {
            return <h1>No doctors found in database.</h1>
        }

        return (
            <div style={{ padding: '20px' }}>
                <h1>Doctors List</h1>
                
                <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
                    {doctors.map((doctor) => (
                        <div key={doctor.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                            {/* Aapne 'first_name' use kiya hai, check karein ke SQL table mein column name yahi hai */}
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