using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace CSharpBlok1TOETS
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public Line lm1 = new Line();
        public Line lm2 = new Line();
        public Line lm3 = new Line();
        public Line lm4 = new Line();
        public Line lm5 = new Line();
        public Line lm6 = new Line();
        public Line lm7 = new Line();
        public Line l1 = new Line();
        public Line l2 = new Line();
        public Line l3 = new Line();
        public Line l4 = new Line();
        public Line l5 = new Line();
        public Line l6 = new Line();
        public Line l7 = new Line();

        public bool shortLongTrigger = true;

        public MainWindow()
        {
            InitializeComponent();
        }

        public void shortLong_Click(object sender, RoutedEventArgs e)
        {
            if (shortLongTrigger == true)
            {
                shortLongTrigger = false;
                shortLongOutput.Text = ("Long");
            }
            else
            {
                shortLongTrigger = true;
                shortLongOutput.Text = ("Short + Long");
            }
        }

        public void clearButton_Click(object sender, RoutedEventArgs e)
        {
            houseBackground.Children.Remove(lm1);
            houseBackground.Children.Remove(lm2);
            houseBackground.Children.Remove(lm3);
            houseBackground.Children.Remove(lm4);
            houseBackground.Children.Remove(lm5);
            houseBackground.Children.Remove(lm6);
            houseBackground.Children.Remove(lm7);
            houseBackground.Children.Remove(l1);
            houseBackground.Children.Remove(l2);
            houseBackground.Children.Remove(l3);
            houseBackground.Children.Remove(l4);
            houseBackground.Children.Remove(l5);
            houseBackground.Children.Remove(l6);
            houseBackground.Children.Remove(l7);


            oppervlakteOutput.Text = ("");
        }

        public void calculateButton_Click(object sender, RoutedEventArgs e)
        {
            int breedteLang;
            int breedteKort;
            int diepteLang;
            int diepteKort;
            int oppervlakte;
            breedteLang = Convert.ToInt32(breedteLangInput.Text);
            breedteKort = Convert.ToInt32(breedteKortInput.Text);
            diepteLang = Convert.ToInt32(diepteLangInput.Text);
            diepteKort = Convert.ToInt32(diepteKortInput.Text);
            oppervlakte = breedteLang * diepteLang;
            oppervlakteOutput.Text = Convert.ToString("Oppervlakte = is: " + oppervlakte);

            if (breedteLang >= 325)
            {
                errorOutput.Text = ("Jij hebt een te groot getal ingevuld in BreedteLang om een plattegrond te tekenen");
                return;
            }

            if (breedteKort >= breedteLang)
            {
                errorOutput.Text = ("Jij hebt een te groot getal ingevuld in BreedteKort om een plattegrond te tekenen");
                return;
            }

            if (diepteLang >= 200)
            {
                errorOutput.Text = ("Jij hebt een te groot getal ingevuld in DiepteLang om een plattegrond te tekenen");
                return;
            }

            if (diepteKort >= diepteLang)
            {
                errorOutput.Text = ("Jij hebt een te groot getal ingevuld in DiepteKort om een plattegrond te tekenen");
                return;
            }

            //House
            if (shortLongTrigger == true)
            {
                lm1.X1 = 10; lm1.Y1 = 10;
                lm1.X2 = breedteKort; lm1.Y2 = 10;
                lm1.Stroke = new SolidColorBrush(Colors.Black);

                lm2.X1 = breedteKort; lm2.Y1 = 10;
                lm2.X2 = breedteKort; lm2.Y2 = diepteKort;
                lm2.Stroke = new SolidColorBrush(Colors.Black);

                lm3.X1 = breedteKort; lm3.Y1 = diepteKort;
                lm3.X2 = breedteLang; lm3.Y2 = diepteKort;
                lm3.Stroke = new SolidColorBrush(Colors.Black);

                lm4.X1 = breedteLang; lm4.Y1 = diepteKort;
                lm4.X2 = breedteLang; lm4.Y2 = diepteLang;
                lm4.Stroke = new SolidColorBrush(Colors.Black);

                lm5.X1 = 10; lm5.Y1 = 10;
                lm5.X2 = 10; lm5.Y2 = diepteLang;
                lm5.Stroke = new SolidColorBrush(Colors.Black);

                lm6.X1 = 10; lm6.Y1 = diepteLang;
                lm6.X2 = (breedteLang / 2) - 10; lm6.Y2 = diepteLang;
                lm6.Stroke = new SolidColorBrush(Colors.Black);

                lm7.X1 = (breedteLang / 2) + 10; lm7.Y1 = diepteLang;
                lm7.X2 = breedteLang; lm7.Y2 = diepteLang;
                lm7.Stroke = new SolidColorBrush(Colors.Black);

                houseBackground.Children.Add(lm1);
                houseBackground.Children.Add(lm2);
                houseBackground.Children.Add(lm3);
                houseBackground.Children.Add(lm4);
                houseBackground.Children.Add(lm5);
                houseBackground.Children.Add(lm6);
                houseBackground.Children.Add(lm7);
            }
            else
            {

            }
        }
    }
}
