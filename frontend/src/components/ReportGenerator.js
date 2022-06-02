import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ReportGenerator = Marking => {

  const doc = new jsPDF();

  Marking.forEach(Marking => {

    doc.autoTable({
      head: [['Criteria', 'Poor Marks', 'Average Marks', 'Good Marks', 'Excellent Marks', 'Total Marks']],
      body: [
        [
          Marking.criteria,
          Marking.poor_marks,
          Marking.average_marks,
          Marking.good_marks,
          Marking.excellent_marks,
          Marking.total_marks
        ],
        [
          Marking.criteria1,
          Marking.poor_marks1,
          Marking.average_marks1,
          Marking.good_marks1,
          Marking.excellent_marks1,
          Marking.total_marks1
        ],
        [
          Marking.criteria2,
          Marking.poor_marks2,
          Marking.average_marks2,
          Marking.good_marks2,
          Marking.excellent_marks2,
          Marking.total_marks2
        ],
        [
          Marking.criteria3,
          Marking.poor_marks3,
          Marking.average_marks3,
          Marking.good_marks3,
          Marking.excellent_marks3,
          Marking.total_marks3
        ],
        [
          Marking.criteria4,
          Marking.poor_marks4,
          Marking.average_marks4,
          Marking.good_marks4,
          Marking.excellent_marks4,
          Marking.total_marks4
        ],
        [
          Marking.criteria5,
          Marking.poor_marks5,
          Marking.average_marks5,
          Marking.good_marks5,
          Marking.excellent_marks5,
          Marking.total_marks5
        ],
        [
          Marking.criteria6,
          Marking.poor_marks6,
          Marking.average_marks6,
          Marking.good_marks6,
          Marking.excellent_marks6,
          Marking.total_marks6
        ],
        [
          Marking.criteria7,
          Marking.poor_marks7,
          Marking.average_marks7,
          Marking.good_marks7,
          Marking.excellent_marks7,
          Marking.total_marks7
        ],
        [
          Marking.criteria8
        ],
        
      ]
    })

  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  doc.text("Marking Scheme ", 14, 10);
  
  doc.save(`Marking_${year}` + " " + `${month}` + " " + `${day}` + ".pdf");

}

export default ReportGenerator;