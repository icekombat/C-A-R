import { Component, OnInit} from '@angular/core';
import {ClickMode, Container, Engine, HoverMode, MoveDirection, OutMode} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = 'C-A-R';

  constructor(private formBuilder: FormBuilder) {
  }

  // @ts-ignore
  form: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    //send data to backend
    const { name, email,country,company,number,goals } = this.form.value;
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      country: this.formBuilder.control(null),
      company: this.formBuilder.control(null),
      number: this.formBuilder.control(null),
      goals:this.formBuilder.control(null)
    });
  }

  // Particle Background
  id:string = "particles-bg";

  particleOptions =
    {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        color: "#fff",
        distance: 170,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 86,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "none",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }

  protected readonly console = console;
}
