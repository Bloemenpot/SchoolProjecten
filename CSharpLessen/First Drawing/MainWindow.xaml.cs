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

namespace First_Drawing
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void DrawButton_Click(object sender, RoutedEventArgs e)
        {
            //Nederlandse vlag met blauwe outline
            //Rood
            Rectangle upperRectangle = new Rectangle();
            upperRectangle.Width = 100;
            upperRectangle.Height = 30;
            upperRectangle.Margin = new Thickness(25, 55, 0, 0);
            upperRectangle.Fill = new SolidColorBrush(Colors.Red);
            paperCanvas.Children.Add(upperRectangle);

            //Wit
            Rectangle middleRectangle = new Rectangle();
            middleRectangle.Width = 100;
            middleRectangle.Height = 30;
            middleRectangle.Margin = new Thickness(25, 85, 0, 0);
            middleRectangle.Fill = new SolidColorBrush(Colors.White);
            paperCanvas.Children.Add(middleRectangle);

            //Blauw
            Rectangle lowerRectangle = new Rectangle();
            lowerRectangle.Width = 100;
            lowerRectangle.Height = 30;
            lowerRectangle.Margin = new Thickness(25, 115, 0, 0);
            lowerRectangle.Fill = new SolidColorBrush(Colors.Blue);
            paperCanvas.Children.Add(lowerRectangle);

            //Outline
            Rectangle outlineRectangle = new Rectangle();
            outlineRectangle.Width = 101;
            outlineRectangle.Height = 92;
            outlineRectangle.Margin = new Thickness(24, 54, 0, 0);
            outlineRectangle.Stroke = new SolidColorBrush(Colors.Aqua);
            paperCanvas.Children.Add(outlineRectangle);
            //Nederlandse vlag met blauwe outline

            //3.10 Triangle
            //Linksboven
            Line l1 = new Line();
            l1.X1 = 20; l1.Y1 = 80;
            l1.X2 = 70; l1.Y2 = 10;
            l1.Stroke = new SolidColorBrush(Colors.Black);

            //Rechtsboven
            Line l2 = new Line();
            l2.X1 = 70; l2.Y1 = 10;
            l2.X2 = 120; l2.Y2 = 80;
            l2.Stroke = new SolidColorBrush(Colors.Black);

            //Onderkant
            Line l3 = new Line();
            l3.X1 = 120; l3.Y1 = 80;
            l3.X2 = 20; l3.Y2 = 80;
            l3.Stroke = new SolidColorBrush(Colors.Black);

            //lineCanvas
            lineCanvas.Children.Add(l1);
            lineCanvas.Children.Add(l2);
            lineCanvas.Children.Add(l3);

            //Picture
            //GekleurdHuis
            BitmapImage demoBitmapImage = new BitmapImage();
            demoBitmapImage.BeginInit();
            demoBitmapImage.UriSource = new Uri(@"C:\Users\Gebruiker\Documents\Lightshot\Huis.png",UriKind.RelativeOrAbsolute);
            demoBitmapImage.EndInit();

            Image huisImage = new Image();
            huisImage.Source = demoBitmapImage;
            huisImage.Margin = new Thickness(300, -450, 0, 0);
            huisImage.Width = 400;
            huisImage.Height = 300;
            paperCanvas.Children.Add(huisImage);

            Ellipse dartbordKlein = new Ellipse();
            dartbordKlein.Width = 30;
            dartbordKlein.Height = 30;
            dartbordKlein.Margin = new Thickness(450, 70, 0, 0);
            dartbordKlein.Fill = new SolidColorBrush(Colors.Red);

            Ellipse dartbordMidden = new Ellipse();
            dartbordMidden.Width = 90;
            dartbordMidden.Height = 90;
            dartbordMidden.Margin = new Thickness(420, 40, 0, 0);
            dartbordMidden.Fill = new SolidColorBrush(Colors.Orange);

            Ellipse dartbordBuiten = new Ellipse();
            dartbordBuiten.Width = 150;
            dartbordBuiten.Height = 150;
            dartbordBuiten.Margin = new Thickness(390, 10, 0, 0);
            dartbordBuiten.Fill = new SolidColorBrush(Colors.LightGreen);

            paperCanvas.Children.Add(dartbordBuiten);
            paperCanvas.Children.Add(dartbordMidden);
            paperCanvas.Children.Add(dartbordKlein);

            Button shooting = new Button();
            shooting.Width = 70;
            shooting.Height = 40;
            shooting.Margin = new Thickness(0, -50, 0, 0);
            paperCanvas.Children.Add(shooting);
        }
        private void CreateShootingButton(object sender, RoutedEventArgs e)
        {
            Button shootButton = new Button();
            shootButton.Height = 40;
            shootButton.Width = 90;
        }
    }
}
